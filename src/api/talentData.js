import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTalent = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/talent.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleArtist = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/talent/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateTalent = (itemObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/talent/${itemObj.firebaseKey}.json`, itemObj)
    .then(() => getTalent().then(resolve))
    .catch(reject);
});

const deleteTalent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/talent/${firebaseKey}.json`)
    .then(resolve)
    .catch((error) => reject(error));
});

const createTalent = (itemObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/talent.json`, itemObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/talent/${response.data.name}.json`, payload)
        .then(() => {
          getTalent().then(resolve);
        });
    }).catch(reject);
});

export {
  getTalent, updateTalent, deleteTalent, createTalent, getSingleArtist
};
