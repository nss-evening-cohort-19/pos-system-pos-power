import axios from 'axios';
import firebaseConfig from './apiKeys';
import revenueObj from './revenueDataFunctions';

const dbURL = firebaseConfig.databaseURL;

const getAllRevenueObj = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/revenue.json`)
    .then((response) => { resolve(revenueObj(Object.values((response.data)))); })
    .catch((reject));
});

export default getAllRevenueObj;
