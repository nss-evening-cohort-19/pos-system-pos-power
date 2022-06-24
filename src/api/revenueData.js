import axios from 'axios';
import firebaseConfig from './apiKeys';
import revenueObj from './revenueDataFunctions';
import { getAllOrders } from './ordersData';
import generateRevenueChart from './revenueChart';

const dbURL = firebaseConfig.databaseURL;

const getAllRevenueObj = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/revenue.json`)
    .then((response) => {
      resolve(revenueObj(Object.values((response.data))));
      return response;
    })
    .then((response) => generateRevenueChart(Object.values((response.data))))
    .catch((reject));
});

const createRevenueNode = (revenueObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/revenue.json`, revenueObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/revenue/${response.data.name}.json`, payload)
        .then(getAllOrders().then(resolve));
    })
    .catch(reject);
});

export { getAllRevenueObj, createRevenueNode };
