import { updatedItems, viewOrderDetails } from '../../api/mergedData';
import { deleteOrder, getSingleOrder } from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import viewOrders from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import revenuePage from '../components/pages/revenue';
import { deleteItem, getItems, getSingleItem } from '../../api/itemsData';
import getAllRevenueObj from '../../api/revenueData';
import itemForm from '../components/forms/itemForm';
import paymentForm from '../components/forms/paymentForm';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('ordersHome')) {
      viewOrders();
    }
    if (e.target.id.includes('createHome')) {
      orderForm();
    }
    if (e.target.id.includes('revenueHome')) {
      getAllRevenueObj().then(revenuePage);
    }
    if (e.target.id.includes('goToPaymentButton')) {
      paymentForm();
    }
    if (e.target.id.includes('goToPaymentButton')) {
      paymentForm();
    }
  });
  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('view-details-btn')) {
      const [, orderFirebaseKey] = event.target.id.split('--');
      viewOrderDetails(orderFirebaseKey).then((orderItemObject) => orderDetails(orderItemObject));
    }

    if (event.target.id.includes('edit-item-btn')) {
      const [, itemFirebaseKey] = event.target.id.split('--');
      getSingleItem(itemFirebaseKey).then((itemObject) => itemForm(itemObject, itemObject.orderId));
    }

    if (event.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = event.target.id.split('--');
        getItems().then((itemArray) => {
          itemArray.forEach((item) => {
            if (item.orderId === firebaseKey) {
              deleteItem(item.firebaseKey).then(null);
            }
          });
        });
        deleteOrder(firebaseKey).then((orderArray) => renderOrders(orderArray));
      }
    }

    if (event.target.id.includes('addItemButton')) {
      const [, firebaseKey] = event.target.id.split('--');
      const itemObj = {};
      itemForm(itemObj, firebaseKey);
    }

    if (event.target.id.includes('edit-order')) {
      const [, firebaseKey] = event.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => orderForm(orderObject));
    }

    if (event.target.id.includes('delete-item-btn')) {
      const [, firebaseKey] = event.target.id.split('--');
      updatedItems(firebaseKey)
        .then((response) => {
          orderDetails(response);
        });
    }
  });
};

export default domEvents;
