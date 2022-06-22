import { getSingleItem, deleteItem } from './itemsData';
import {
  getClosedOrders, getOrderByUser, getSingleOrder, getSingleOrdersItems, getOpenOrders
} from './ordersData';

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

export {
  viewOrderDetails, updatedItems, viewClosedOrdersByUser, viewOpenOrdersByUser
};
