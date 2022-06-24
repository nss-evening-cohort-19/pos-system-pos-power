import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

// eslint-disable-next-line no-unused-vars
const getAllOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((reject));
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleOrdersItems = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/items.json?orderBy="orderId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orders/${firebaseKey}.json`)
    .then(() => {
      getAllOrders().then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

const createOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orders.json`, orderObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getAllOrders(orderObject.uid).then(resolve);
        });
    }).catch(reject);
});

const getOrderByUser = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteUserOrder = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/orders/${firebaseKey}.json`)
    .then(() => {
      getOrderByUser().then((ordersArray) => resolve(ordersArray));
    })
    .catch((error) => reject(error));
});

const getOpenOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json?orderBy="orderStatus"&equalTo="open"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getClosedOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/orders.json?orderBy="orderStatus"&equalTo="closed"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createUserOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/orders.json`, orderObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/orders/${response.data.name}.json`, payload)
        .then(() => {
          getOrderByUser(orderObject.uid).then(resolve);
        });
    }).catch(reject);
});

const updateOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/orders/${orderObject.firebaseKey}.json`, orderObject)
    .then(() => {
      getAllOrders(orderObject.uid).then(resolve);
    })
    .catch(reject);
});

const updateUserOrder = (orderObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/orders/${orderObject.firebaseKey}.json`, orderObject)
    .then(() => {
      getOrderByUser(orderObject.uid).then(resolve);
    })
    .catch(reject);
});

const getOpenOrdersByUser = (uid) => new Promise((resolve, reject) => {
  getOpenOrders().then((orderArray) => {
    const userOrders = orderArray.filter((order) => order.uid === uid);
    resolve(userOrders);
  }).catch((error) => reject(error));
});

const getClosedOrdersByUser = (user) => new Promise((resolve, reject) => {
  getClosedOrders().then((orderArray) => {
    const userOrders = orderArray.filter((order) => order.uid === user);
    resolve(userOrders);
  }).catch((error) => reject(error));
});

export {
  getAllOrders, getSingleOrder, getSingleOrdersItems, deleteOrder, createOrder, updateOrder, getOrderByUser, getOpenOrders, getClosedOrders, createUserOrder, updateUserOrder, getOpenOrdersByUser, getClosedOrdersByUser, deleteUserOrder
};
