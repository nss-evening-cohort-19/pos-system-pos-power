import axios from 'axios';
import firebaseConfig from './apiKeys';
import { revenueObj, customRevenueObj } from './revenueDataFunctions';
import { getAllOrders } from './ordersData';

const dbURL = firebaseConfig.databaseURL;

const getAllRevenueObj = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/revenue.json`)
    .then((response) => { resolve(revenueObj(Object.values((response.data)))); })
    .catch((reject));
});

const getAllCustomRevenueObj = (startDate, endDate) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/revenue.json`)
    .then((response) => { resolve(customRevenueObj(Object.values((response.data)), startDate, endDate)); })
    .catch((reject));
});

const createRevenueNode = (revenueObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/revenue.json`, revenueObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/revenue/${response.data.name}.json`, payload)
        .then(getAllOrders().then(resolve));
    }).catch(reject);
});

export { getAllRevenueObj, createRevenueNode, getAllCustomRevenueObj };
