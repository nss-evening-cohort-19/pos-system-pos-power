import viewOrders from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import loginHome from '../components/pages/loginHome';

const navEvents = () => {
  document.querySelector('#home-nav').addEventListener('click', loginHome);

  document.querySelector('#view-order').addEventListener('click', viewOrders);

  document.querySelector('#create-order').addEventListener('click', orderForm);
};

export default navEvents;
