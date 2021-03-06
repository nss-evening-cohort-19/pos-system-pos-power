import {
  updatedItems, viewOrderDetails, cloneMenuItem, updatedOrderItems
} from '../../api/mergedData';
import {
  getSingleOrder, getOrderByUser, getClosedOrdersByUser, getOpenOrdersByUser
} from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import { viewUserOrders } from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import { getItems, getSingleItem } from '../../api/itemsData';
import itemForm from '../components/forms/itemForm';
import paymentForm from '../components/forms/paymentForm';
import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import viewMenu from '../components/pages/menuPage';
import artistSignUp from '../components/forms/artistSignUp';
import thankYouMessage from '../helpers/thankYouMessage';

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

    if (event.target.id.includes('delete-from-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = event.target.id.split('--');
        updatedOrderItems(firebaseKey)
          .then((response) => {
            orderDetails(response);
          });
      }
    }

    if (event.target.id.includes('addItemButton')) {
      getItems().then((menuArray) => viewMenu(menuArray));
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
      getOpenOrdersByUser(user).then((orderArray) => renderOrders(orderArray));
    }

    if (event.target.id.includes('closed-orders')) {
      getClosedOrdersByUser(user).then((orderArray) => renderOrders(orderArray));
    }

    if (event.target.id.includes('artist-sign-up')) {
      artistSignUp();
    }

    if (event.target.id.includes('submit-application')) {
      thankYouMessage();
    }

    if (event.target.id.includes('add-menuItem')) {
      const [, firebaseKey] = event.target.id.split('--');
      getOrderByUser(user).then((orderArray) => {
        orderArray.forEach((order) => {
          if (order.orderStatus === 'open') {
            getSingleItem(firebaseKey).then((itemObject) => {
              cloneMenuItem(itemObject, order.firebaseKey).then((itemArray) => {
                itemArray.forEach((item) => {
                  if (order.firebaseKey === item.orderId) {
                    viewOrderDetails(item.orderId).then((orderItemObject) => orderDetails(orderItemObject));
                  }
                });
              });
            });
          }
        });
      });
    }
  });
};

export default domEvents;
