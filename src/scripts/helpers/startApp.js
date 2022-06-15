import getAllOrders from '../../api/ordersData';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import renderOrders from '../components/pages/orders';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  getAllOrders().then((response) => renderOrders(response));
};

export default startApp;
