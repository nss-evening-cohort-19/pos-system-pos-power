import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getAllOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleOrdersItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items.json?orderBy="orderId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orders/${firebaseKey}.json`)
    .then(() => {
      getAllOrders().then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

const createOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orders.json`, orderObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getAllOrders(orderObject.uid).then(resolve);
        });
    }).catch(reject);
});

const updateOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/orders/${orderObject.firebaseKey}.json`, orderObject)
    .then(() => {
      getAllOrders(orderObject.uid).then(resolve);
    })
    .catch(reject);
});

const getOrderByUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

export {
  getAllOrders, getSingleOrder, getSingleOrdersItems, deleteOrder, createOrder, updateOrder, getOrderByUser
};
