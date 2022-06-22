import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMenuItems = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/menuItems.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const createMenuItem = (menuObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/menuItems.json`, menuObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/menuItems/${response.data.name}.json`, payload)
        .then(() => {
          getMenuItems(menuObject.uid).then(resolve);
        });
    }).catch(reject);
});

const getSingleMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/menuItems/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteMenuItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/menuItems/${firebaseKey}.json`)
    .then(() => {
      getMenuItems().then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

const updateMenuItem = (menuObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/menuItems/${menuObject.firebaseKey}.json`, menuObject)
    .then(() => {
      getMenuItems(menuObject.uid).then(resolve);
    })
    .catch(reject);
});

export {
  getMenuItems, createMenuItem, getSingleMenuItem, deleteMenuItem, updateMenuItem
};
