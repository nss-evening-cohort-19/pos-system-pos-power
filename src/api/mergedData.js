import { getSingleItem, deleteItem } from './itemsData';
import { getSingleOrder, getSingleOrdersItems } from './ordersData';

const viewOrderDetails = (orderFirebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(orderFirebaseKey)
    .then((orderObject) => {
      getSingleOrdersItems(orderObject.firebaseKey)
        .then((itemArray) => {
          resolve({ itemArray, ...orderObject });
        });
    }).catch((error) => reject(error));
});

const updatedItems = (itemFirebaseKey) => new Promise((resolve, reject) => {
  getSingleItem(itemFirebaseKey)
    .then((itemObject) => {
      deleteItem(itemFirebaseKey, itemObject.orderId)
        .then(() => viewOrderDetails(itemObject.orderId).then(resolve))
        .catch((error) => reject(error));
    });
});

export { viewOrderDetails, updatedItems };
