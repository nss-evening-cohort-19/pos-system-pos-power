import viewOrders from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import loginHome from '../components/pages/loginHome';
import renderOrders from '../components/pages/orders';
import { getOrderByUser } from '../../api/ordersData';

const navEvents = (user) => {
  document.querySelector('#home-nav').addEventListener('click', () => { loginHome(user); });

  document.querySelector('#view-order').addEventListener('click', viewOrders);

  document.querySelector('#create-order').addEventListener('click', orderForm);

  document.querySelector('#searchBar-input').addEventListener('keyup', (e) => {
    const input = document.querySelector('#searchBar-input').value.toLowerCase();
    if (e.keyCode === 13) {
      getOrderByUser(user.uid)
        .then((response) => (response.filter((order) => order.last_name.toLowerCase().includes(input))))
        .then((searchedOrders) => (renderOrders(searchedOrders, user.uid)))
        .then(document.querySelector('#searchBar-input').value = '');
    }
  });
};

export default navEvents;
