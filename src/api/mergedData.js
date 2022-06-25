import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getSingleItem, deleteItem, getOrderItems } from './itemsData';
import {
  getClosedOrders, getOrderByUser, getSingleOrder, getSingleOrdersItems, getOpenOrders
} from './ordersData';

const dbURL = firebaseConfig.databaseURL;

const viewOrderDetails = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObject) => {
      getSingleOrdersItems(orderObject.firebaseKey)
        .then((itemArray) => {
          resolve({ itemArray, ...orderObject });
        });
    }).catch((error) => reject(error));
});

const updatedItems = (itemFirebaseKey) => new Promise((resolve, reject) => {
  getSingleItem(itemFirebaseKey)
    .then((itemObject) => {
      deleteItem(itemFirebaseKey, itemObject.orderId)
        .then(() => viewOrderDetails(itemObject.orderId).then(resolve))
        .catch((error) => reject(error));
    });
});

const viewClosedOrdersByUser = (user) => new Promise((resolve, reject) => {
  getOrderByUser(user)
    .then((orderObject) => {
      getClosedOrders()
        .then((closedArray) => {
          resolve({ closedArray, ...orderObject });
        });
    }).catch((error) => reject(error));
});

const viewOpenOrdersByUser = (user) => new Promise((resolve, reject) => {
  getOrderByUser(user)
    .then((orderObject) => {
      getOpenOrders()
        .then((openArray) => {
          resolve({ openArray, ...orderObject });
        });
    }).catch((error) => reject(error));
});

const cloneMenuItem = (menuObject, orderFirebaseKey) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orderItems.json`, menuObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name, orderId: orderFirebaseKey };
      axios.patch(`${dbURL}/orderItems/${response.data.name}.json`, payload)
        .then((fire) => getOrderItems(fire.data.orderId));
    }).catch(reject);
});

export {
  viewOrderDetails, updatedItems, viewClosedOrdersByUser, viewOpenOrdersByUser, cloneMenuItem
};
