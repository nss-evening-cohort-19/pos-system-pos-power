import { getSingleOrder, getSingleOrdersItems, updateOrder } from '../../api/ordersData';
import { createRevenueNode } from '../../api/revenueData';
import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import revenuePage from './pages/revenue';

const closeOrder = (firebaseKey) => {
  getSingleOrder(firebaseKey).then((order) => {
    if (order.orderStatus === 'closed') {
      clearDom();
      const domString = '<h1>Order Already Closed!</h1>';
      renderToDOM('#view', domString);
    } else {
      const updatedOrder = {
        orderStatus: 'closed',
        firebaseKey
      };
      updateOrder(updatedOrder).then(
        getSingleOrdersItems(firebaseKey).then((itemArray) => {
          const revenuObject = {
            totalAmount: itemArray.map(((item) => item.price).reduce((sum, val) => sum + val, 0)),
            tipAmount: document.querySelector('#tipAmount').value,
            paymentType: document.querySelector('#paymentType').value,
            orderType: order.orderType,
            date: new Date().toLocaleString()
          };
          createRevenueNode(revenuObject).then(revenuePage(revenuObject));
        })
      );
    }
  });
};

export default closeOrder;
