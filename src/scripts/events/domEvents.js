// import orderForm from '../components/forms/orderForm';
// import revenuePage from '../components/pages/revenue';
// import viewOrders from '../helpers/viewOrders';

import viewOrderDetails from '../../api/mergedData';
import { deleteOrder } from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';

const domEvents = () => {
  // document.querySelector('#ordersHome').addEventListener('click', viewOrders);

  // document.querySelector('#createHome').addEventListener('click', orderForm);

  // document.querySelector('#revenueHome').addEventListener('click', revenuePage);

  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('edit-order-btn')) {
      const [, orderFirebaseKey] = event.target.id.split('--');
      console.warn('order firebaseKey: ', orderFirebaseKey);
      viewOrderDetails(orderFirebaseKey).then((orderItemObject) => orderDetails(orderItemObject));
    }

    if (event.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = event.target.id.split('--');
        deleteOrder(firebaseKey).then((orderArray) => renderOrders(orderArray));
      }
    }
  });
};

export default domEvents;
