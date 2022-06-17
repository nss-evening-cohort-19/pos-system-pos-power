import viewOrders from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import loginHome from '../components/pages/loginHome';

const navEvents = (user) => {
  document.querySelector('#home-nav').addEventListener('click', () => { loginHome(user); });

  document.querySelector('#view-order').addEventListener('click', viewOrders);

  document.querySelector('#create-order').addEventListener('click', orderForm);
};

export default navEvents;
