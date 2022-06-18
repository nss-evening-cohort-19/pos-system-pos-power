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

const createRevenueNode = (revenueObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/revenue.json`, revenueObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/revenue/${response.data.name}.json`, payload)
        .then(() => {
          getAllRevenueObj().then(resolve);
        });
    }).catch(reject);
});

export { getAllRevenueObj, createRevenueNode };
