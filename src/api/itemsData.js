import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getSingleItem;
