import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getOrderMenuItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orderItems.json?orderBy="orderId"&equalTo="${firebaseKey}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getOrderMenuItems;
