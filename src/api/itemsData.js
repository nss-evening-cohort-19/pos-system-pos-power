import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateItem = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/items/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getItems().then(resolve))
    .catch(reject);
});

// const getItemByOrderId = ()

export { getItems, getSingleItem, updateItem };
