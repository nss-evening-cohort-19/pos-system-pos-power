import axios from 'axios';
import firebaseConfig from './apiKeys';
// import revenueObj from './revenueDataFunctions';

const dbURL = firebaseConfig.databaseURL;

const getAllRevenueObj = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/revenue.json`)
    .then((response) => (console.warn((Object.values(response.data)))))
    // .then((responseArr) => resolve(console.warn(revenueObj(responseArr))))
    .catch((reject));
});

export default getAllRevenueObj;
