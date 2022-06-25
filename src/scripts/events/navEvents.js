import { viewOrders } from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import loginHome from '../components/pages/loginHome';
import renderOrders from '../components/pages/orders';
import { getAllOrders } from '../../api/ordersData';
import viewMenu from '../components/pages/menuPage';

const navEvents = (user) => {
  document.querySelector('#home-nav').addEventListener('click', () => { loginHome(user); });

  document.querySelector('#view-order').addEventListener('click', viewOrders);

  document.querySelector('#create-order').addEventListener('click', orderForm);

  document.querySelector('#menu-nav').addEventListener('click', viewMenu);

  document.querySelector('#navBarToggleBtn').addEventListener('click', (e) => {
    console.warn(e);
    console.warn(document.querySelector('#navbarSupportedContent').classList);
    const navBarCollapse = document.querySelector('#navbarSupportedContent');
    if (navBarCollapse.classList.value === ('navbar-collapse collapse show')) {
      navBarCollapse.classList.replace('show', 'hide');
    }
  });

  document.querySelector('#searchBar-input').addEventListener('keyup', (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchBar-input').value.toLowerCase();
    if (e.keyCode === 13) {
      getAllOrders()
        .then((response) => (response.filter((order) => order.last_name.toLowerCase().includes(input) || order.customerPhoneNumber.toLowerCase().includes(input))))
        .then((searchedOrders) => (renderOrders(searchedOrders, user.uid)))
        .then(document.querySelector('#searchBar-input').value = '');
    }
  });
};

export default navEvents;
