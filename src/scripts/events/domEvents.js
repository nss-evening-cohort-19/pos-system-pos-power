import { viewOrderDetails, cloneMenuItem, updatedOrderItems } from '../../api/mergedData';
import {
  deleteOrder, getSingleOrder, getOpenOrders, getClosedOrders, getAllOrders, getOrderByUser
} from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import { viewOrders } from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import revenuePage from '../components/pages/revenue';
import { deleteItem, getItems, getSingleItem } from '../../api/itemsData';
import { getAllCustomRevenueObjChart, getAllRevenueObj } from '../../api/revenueData';
import itemForm from '../components/forms/itemForm';
import paymentForm from '../components/forms/paymentForm';
import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import adminViewMenu from '../components/pages/adminMenuPage';
// import generateRevenueChart from '../../api/revenueChart';

const domEvents = (user) => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('ordersHome')) {
      viewOrders(user);
    }
    if (e.target.id.includes('createHome')) {
      orderForm(user);
    }
    if (e.target.id.includes('revenueHome')) {
      getAllRevenueObj().then(revenuePage);
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
      getItems().then((menuArray) => adminViewMenu(menuArray, user));
    }

    if (event.target.id.includes('edit-order')) {
      const [, firebaseKey] = event.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => orderForm(orderObject));
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
    // Custom Start and End Dates
    if (event.target.id.includes('date-modal-submit')) {
      const startDateValue = `${document.querySelector('#startDate').value}, 12:00:00 AM`;
      const endDateValue = `${document.querySelector('#endDate').value}, 11:59:59 PM`;
      const startDate = new Date(startDateValue).toLocaleString();
      const endDate = new Date(endDateValue).toLocaleString();
      getAllCustomRevenueObjChart(startDate, endDate).then((response) => revenuePage(response));
    }

    if (event.target.id.includes('all-orders')) {
      getAllOrders(user).then((orderArray) => renderOrders(orderArray));
    }

    if (event.target.id.includes('open-orders')) {
      getOpenOrders(user).then((orderArray) => renderOrders(orderArray));
    }

    if (event.target.id.includes('closed-orders')) {
      getClosedOrders(user).then((orderArray) => renderOrders(orderArray));
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
