import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getAllOrders = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json`)
    .then((response) => {
      console.warn(response);
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const deleteOrder = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders/${firebaseKey}.json`)
    .then(() => {
      getAllOrders(uid).then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

export { getAllOrders, deleteOrder };
