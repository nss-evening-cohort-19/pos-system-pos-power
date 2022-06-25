import axios from 'axios';
import firebaseConfig from './apiKeys';
import { getSingleItem, deleteItem } from './itemsData';
import {
  getClosedOrders, getOrderByUser, getSingleOrder, getOpenOrders
} from './ordersData';
import {
  getAllOrderMenuItems, getOrderMenuItems, getSingleOrderItem, deleteOrderItem
} from './orderItems';

const dbURL = firebaseConfig.databaseURL;

const viewOrderDetails = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObject) => {
      getOrderMenuItems(orderObject.firebaseKey)
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
        .then(() => {
          getAllOrderMenuItems().then(resolve);
        });
    }).catch(reject);
});

const updatedOrderItems = (itemFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrderItem(itemFirebaseKey)
    .then((itemObject) => {
      deleteOrderItem(itemFirebaseKey, itemObject.orderId)
        .then(() => viewOrderDetails(itemObject.orderId).then(resolve))
        .catch((error) => reject(error));
    });
});

export {
  viewOrderDetails, updatedItems, viewClosedOrdersByUser, viewOpenOrdersByUser, cloneMenuItem, updatedOrderItems
};
