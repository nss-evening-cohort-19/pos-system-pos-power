// import orderForm from '../components/forms/orderForm';
// import revenuePage from '../components/pages/revenue';
// import viewOrders from '../helpers/viewOrders';

import viewOrderDetails from '../../api/mergedData';
import { deleteOrder, getSingleOrder } from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import viewOrders from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import revenuePage from '../components/pages/revenue';

const domEvents = () => {
  document.querySelector('#view').addEventListener('click', (e) => {
    if (e.target.id.includes('ordersHome')) {
      viewOrders();
    }
    if (e.target.id.includes('createHome')) {
      orderForm();
    }
    if (e.target.id.includes('revenueHome')) {
      revenuePage();
    }
  });
  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('view-details-btn')) {
      const [, orderFirebaseKey] = event.target.id.split('--');
      viewOrderDetails(orderFirebaseKey).then((orderItemObject) => orderDetails(orderItemObject));
    }

    if (event.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = event.target.id.split('--');
        deleteOrder(firebaseKey).then((orderArray) => renderOrders(orderArray));
      }
    }

    if (event.target.id.includes('edit-order')) {
      const [, firebaseKey] = event.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObject) => orderForm(orderObject));
    }
  });
};

export default domEvents;
