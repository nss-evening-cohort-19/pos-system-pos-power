import { updatedItems, viewOrderDetails } from '../../api/mergedData';
import {
  deleteOrder, getSingleOrder, getOrderByUser, getOpenOrders, getClosedOrders
} from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import { viewUserOrders } from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import { deleteItem, getItems, getSingleItem } from '../../api/itemsData';
import itemForm from '../components/forms/itemForm';
import paymentForm from '../components/forms/paymentForm';
import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const domEvents = (user) => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('ordersHome')) {
      viewUserOrders(user);
    }
    if (e.target.id.includes('createHome')) {
      getOrderByUser(user).then((orderArray) => {
        if (orderArray.some((order) => order.orderStatus === 'open')) {
          clearDom();
          const domString = '<h1 class="existing-order">You already Have a Current Order!</h1>';
          renderToDOM('#view', domString);
        } else {
          orderForm(user);
        }
      });
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
        deleteOrder(firebaseKey, user).then(() => viewUserOrders(user));
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

    if (event.target.id.includes('goToPaymentButton')) {
      const [, firebaseKey] = event.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => {
        if (orderObject.orderStatus === 'closed') {
          clearDom();
          const domString = '<h1 id="already-closed">Order Already Closed!</h1>';
          renderToDOM('#view', domString);
        } else {
          paymentForm(orderObject);
        }
      });
    }

    if (event.target.id.includes('all-orders')) {
      getOrderByUser(user).then((orderArray) => renderOrders(orderArray));
    }

    if (event.target.id.includes('open-orders')) {
      getOpenOrders(user).then((orderArray) => renderOrders(orderArray));
    }

    if (event.target.id.includes('closed-orders')) {
      getClosedOrders(user).then((orderArray) => renderOrders(orderArray));
    }
  });
};

export default domEvents;
