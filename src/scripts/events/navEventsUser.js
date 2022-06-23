import { viewUserOrders } from '../helpers/viewOrders';
import orderForm from '../components/forms/orderForm';
import renderOrders from '../components/pages/orders';
import { getAllOrders, getOrderByUser } from '../../api/ordersData';
import loginHomeUser from '../components/pages/loginHomeUser';
import renderToDOM from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';

const navEvents = (user) => {
  document.querySelector('#home-nav').addEventListener('click', () => { loginHomeUser(user); });

  document.querySelector('#view-order').addEventListener('click', () => { viewUserOrders(user.uid); });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-order')) {
      getOrderByUser(user.uid).then((orderArray) => {
        if (orderArray.some((order) => order.orderStatus === 'open')) {
          clearDom();
          const domString = '<h1 class="existing-order">You already Have a Current Order!</h1>';
          renderToDOM('#view', domString);
        } else {
          orderForm(user);
        }
      });
    }
  });

  document.querySelector('#searchBar-input').addEventListener('keyup', (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchBar-input').value.toLowerCase();
    if (e.keyCode === 13) {
      getAllOrders(user.uid)
        .then((response) => (response.filter((order) => order.last_name.toLowerCase().includes(input) || order.customerPhoneNumber.toLowerCase().includes(input))))
        .then((searchedOrders) => (renderOrders(searchedOrders, user.uid)))
        .then(document.querySelector('#searchBar-input').value = '');
    }
  });
};

export default navEvents;
