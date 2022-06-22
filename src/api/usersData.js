import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const createUser = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/users.json`, userObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/users/${response.data.name}.json`, payload)
        .then(() => {
          getAllUsers(userObject.uid).then(resolve);
        });
    }).catch(reject);
});

const getUserByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getUserByUid, createUser, getAllUsers };
