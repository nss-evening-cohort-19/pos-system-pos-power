import renderOrders from '../components/pages/orders';
import { getAllOrders } from '../../api/ordersData';
import clearDom from '../helpers/clearDom';
import orderForm from '../components/forms/orderForm';

const viewOrders = () => {
  clearDom();
  getAllOrders().then((response) => renderOrders(response));
};

const navEvents = () => {
  document.querySelector('#view-order').addEventListener('click', viewOrders);

  document.querySelector('#create-order').addEventListener('click', orderForm);

  document.querySelector('#ordersHome').addEventListener('click', viewOrders);

  document.querySelector('#createHome').addEventListener('click', orderForm);
};

export default navEvents;
