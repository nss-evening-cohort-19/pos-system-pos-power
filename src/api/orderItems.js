import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getOrderMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json?orderBy="orderId"&equalTo="${firebaseKey}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getAllOrderMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getOrderItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const deleteOrderItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orderItems/${firebaseKey}.json`)
    .then(resolve)
    .catch((error) => reject(error));
});

const getSingleOrderItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getOrderMenuItems, getAllOrderMenuItems, getOrderItems, deleteOrderItem, getSingleOrderItem
};
