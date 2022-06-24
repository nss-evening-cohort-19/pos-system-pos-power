import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getAllBookings = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/bookings.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const getSingleBooking = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/bookings/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteBooking = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/bookings/${firebaseKey}.json`)
    .then(() => {
      getAllBookings().then((bookingArray) => resolve(bookingArray));
    })
    .catch((error) => reject(error));
});

const createBooking = (bookingObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/bookings.json`, bookingObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/bookings/${response.data.name}.json`, payload)
        .then(() => {
          getAllBookings(bookingObject.uid).then(resolve);
        });
    }).catch(reject);
});

const updateBooking = (bookingObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/bookings/${bookingObject.firebaseKey}.json`, bookingObject)
    .then(() => {
      getAllBookings(bookingObject.uid).then(resolve);
    })
    .catch(reject);
});

const getVirtualBookings = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/bookings.json?orderBy="performanceType"&equalTo="virtual"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getInPersonBookings = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/bookings.json?orderBy="performanceType"&equalTo="in-person"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

export {
  getAllBookings, getSingleBooking, updateBooking, createBooking, deleteBooking, getInPersonBookings, getVirtualBookings
};
