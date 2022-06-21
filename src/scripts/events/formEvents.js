import {
  updateItem, createItem
} from '../../api/itemsData';
import { viewOrderDetails } from '../../api/mergedData';
import {
  createOrder, getAllOrders, getClosedOrders, getOpenOrders, updateOrder
} from '../../api/ordersData';
import closeOrder from '../components/closeOrder';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const newOrder = {
        customerEmail: document.querySelector('#customerEmail').value,
        customerPhoneNumber: document.querySelector('#customerPhoneNumber').value,
        last_name: document.querySelector('#last_name').value,
        orderStatus: 'open',
        orderType: document.querySelector('#orderType').value,
        uid,
      };
      createOrder(newOrder).then((response) => renderOrders(response));
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const updatedOrder = {
        customerEmail: document.querySelector('#customerEmail').value,
        customerPhoneNumber: document.querySelector('#customerPhoneNumber').value,
        last_name: document.querySelector('#last_name').value,
        orderStatus: 'open',
        orderType: document.querySelector('#orderType').value,
        firebaseKey,
        uid
      };
      updateOrder(updatedOrder).then((orderArray) => renderOrders(orderArray));
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        firebaseKey,
        item_name: document.querySelector('#item_name').value,
        item_price: document.querySelector('#item_price').value,
      };
      updateItem(itemObject)
        .then((itemArray) => {
          itemArray.forEach((item) => {
            if (firebaseKey === item.firebaseKey) {
              viewOrderDetails(item.orderId).then((orderItemObject) => orderDetails(orderItemObject));
            }
          });
        });
    }

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        item_name: document.querySelector('#item_name').value,
        item_price: document.querySelector('#item_price').value,
        orderId: firebaseKey
      };
      createItem(itemObject)
        .then((itemArray) => {
          itemArray.forEach((item) => {
            if (firebaseKey === item.orderId) {
              viewOrderDetails(item.orderId).then((orderItemObject) => orderDetails(orderItemObject));
            }
          });
        });
    }

    if (e.target.id.includes('paymentForm')) {
      const [, firebaseKey] = e.target.id.split('--');
      closeOrder(firebaseKey);
    }

    if (e.target.id.includes('status-form')) {
      if (document.querySelector('#orderStatusButton').value === 'open') {
        getOpenOrders().then((orderArray) => renderOrders(orderArray));
      } else if (document.querySelector('#orderStatusButton').value === 'closed') {
        getClosedOrders().then((orderArray) => renderOrders(orderArray));
      } else {
        getAllOrders().then((orderArray) => renderOrders(orderArray));
      }
    }
  });
};

export default formEvents;
