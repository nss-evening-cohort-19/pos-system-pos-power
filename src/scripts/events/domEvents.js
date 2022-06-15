import renderOrders from '../components/pages/orders';
import getAllOrders from '../../api/ordersData';
import clearDom from '../helpers/clearDom';
import orderForm from '../components/forms/orderForm';
import revenuePage from '../components/pages/revenue';

const viewOrders = () => {
  clearDom();
  getAllOrders().then((response) => renderOrders(response));
};

const domEvents = () => {
  document.querySelector('#ordersHome').addEventListener('click', viewOrders);

  document.querySelector('#createHome').addEventListener('click', orderForm);

  document.querySelector('#revenueHome').addEventListener('click', revenuePage);
};

export default domEvents;
