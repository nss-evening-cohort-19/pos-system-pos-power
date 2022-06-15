import renderOrders from '../components/pages/orders';
import { getAllOrders } from '../../api/ordersData';

const viewOrders = () => {
  getAllOrders().then((response) => renderOrders(response));
};

export default viewOrders;
