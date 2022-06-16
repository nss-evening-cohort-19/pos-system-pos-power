import { getSingleOrder, getSingleOrdersItems } from './ordersData';

const viewOrderDetails = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObject) => {
      getSingleOrdersItems(orderObject.firebaseKey)
        .then((itemObj) => {
          resolve({ itemObj, ...orderObject });
        });
    }).catch((error) => reject(error));
});

export default viewOrderDetails;
