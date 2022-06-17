// import orderForm from '../components/forms/orderForm';
// import revenuePage from '../components/pages/revenue';
// import viewOrders from '../helpers/viewOrders';

import viewOrderDetails from '../../api/mergedData';
import { deleteOrder } from '../../api/ordersData';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import viewOrders from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import revenuePage from '../components/pages/revenue';
import { getSingleItem } from '../../api/itemsData';
import itemForm from '../components/forms/itemForm';

function domEvents() {
  document.querySelector('#ordersHome').addEventListener('click', viewOrders);

  document.querySelector('#createHome').addEventListener('click', orderForm);

  document.querySelector('#revenueHome').addEventListener('click', revenuePage);

  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('view-details-btn')) {
      const [, orderFirebaseKey] = event.target.id.split('--');
      viewOrderDetails(orderFirebaseKey).then((orderItemObject) => orderDetails(orderItemObject));
    }

    if (event.target.id.includes('edit-item-btn')) {
      const [, itemFirebaseKey] = event.target.id.split('--');
      getSingleItem(itemFirebaseKey).then((itemObject) => itemForm(itemObject));
    }

    if (event.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = event.target.id.split('--');
        deleteOrder(firebaseKey).then((orderArray) => renderOrders(orderArray));
      }
    }
  });
}

export default domEvents;
