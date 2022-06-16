// import orderForm from '../components/forms/orderForm';
// import revenuePage from '../components/pages/revenue';
// import viewOrders from '../helpers/viewOrders';

import viewOrderDetails from '../../api/mergedData';
import orderDetails from '../components/pages/orderDetails';

const domEvents = () => {
  // document.querySelector('#ordersHome').addEventListener('click', viewOrders);

  // document.querySelector('#createHome').addEventListener('click', orderForm);

  // document.querySelector('#revenueHome').addEventListener('click', revenuePage);

  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('edit-order-btn')) {
      const [, orderFirebaseKey] = event.target.id.split('--');
      console.warn('order firebaseKey: ', orderFirebaseKey);
      viewOrderDetails(orderFirebaseKey).then((orderItemObject) => console.warn(orderItemObject));
      viewOrderDetails(orderFirebaseKey).then((orderItemObject) => orderDetails(orderItemObject));
    }
  });
};

export default domEvents;
