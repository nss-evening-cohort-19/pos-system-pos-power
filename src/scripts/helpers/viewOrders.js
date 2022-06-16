import renderOrders from '../components/pages/orders';
import { getAllOrders } from '../../api/ordersData';

const viewOrders = (user) => {
  getAllOrders(user).then((response) => renderOrders(response));
};

export default viewOrders;
