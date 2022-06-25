import renderOrders from '../components/pages/orders';
import { getAllOrders, getOrderByUser } from '../../api/ordersData';

const viewOrders = (user) => {
  getAllOrders(user).then((response) => renderOrders(response));
};

const viewUserOrders = (user) => {
  getOrderByUser(user).then((response) => renderOrders(response));
};

export { viewOrders, viewUserOrders };
