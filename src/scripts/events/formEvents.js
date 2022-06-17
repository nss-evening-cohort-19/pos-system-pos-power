import { createOrder } from '../../api/ordersData';
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

    if (e.target.id.includes('update-item')) {
      const [, itemFirebaseKey] = e.target.id.split('--');
      console.warn('itemFirebaseKey: ', itemFirebaseKey);
    }
  });
};

export default formEvents;
