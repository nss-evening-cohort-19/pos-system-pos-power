import orderForm from '../components/forms/orderForm';
import revenuePage from '../components/pages/revenue';
import viewOrders from '../helpers/viewOrders';

const domEvents = () => {
  document.querySelector('#ordersHome').addEventListener('click', viewOrders);

  document.querySelector('#createHome').addEventListener('click', orderForm);

  document.querySelector('#revenueHome').addEventListener('click', revenuePage);
};

export default domEvents;
