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

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/items/${firebaseKey}.json`)
    .then(() => {
      getItems().then((itemsArray) => resolve(itemsArray));
    })
    .catch((error) => reject(error));
});

const createItem = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/items.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/items/${response.data.name}.json`, payload)
        .then(() => {
          getItems().then(resolve);
        });
    }).catch(reject);
});

// const getOrderId = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbURL}/items.json?orderBy="orderId"&equalTo="$"`)
// })

export {
  getItems, getSingleItem, updateItem, deleteItem, createItem
};
