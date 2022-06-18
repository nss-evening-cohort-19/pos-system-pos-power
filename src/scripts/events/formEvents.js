import { updateItem, createItem, getItems } from '../../api/itemsData';
import viewOrderDetails from '../../api/mergedData';
import { createOrder, updateOrder, getSingleOrder } from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import createRevenueNode from '../../api/revenueData';

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
      getItems().then((itemArray) => {
        let sum = 0;
        itemArray.forEach((item) => {
          if (item.orderId === firebaseKey) {
            sum += item.price;
          }
        });
        const revenueObject = {
          totalAmount: sum,
          date: new Date().toLocaleString(),
          tipAmount: document.querySelector('#tipAmount').value,
          paymentType: document.querySelector('#paymentType').value,
          orderId: firebaseKey,
          orderType: getSingleOrder(firebaseKey).then((orderObject) => orderObject.orderType)
        };

        createRevenueNode(revenueObject).then(null);
      });
    }
  });
};

export default formEvents;
