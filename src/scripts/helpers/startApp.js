// import getAllOrders from '../../api/ordersData';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
// import renderOrders from '../components/pages/orders';
import loginHome from '../components/pages/loginHome';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  loginHome(user);
  // getAllOrders().then((response) => renderOrders(response));
};

export default startApp;
