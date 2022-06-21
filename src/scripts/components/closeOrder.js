import { getSingleOrder, getSingleOrdersItems, updateOrder } from '../../api/ordersData';
import { createRevenueNode } from '../../api/revenueData';
import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';
import renderOrders from './pages/orders';

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
          console.warn(itemArray);
          let sum = 0;
          itemArray.forEach((item) => {
            sum += Number(item.item_price);
          });
          console.warn(sum);
          const revenueObject = {
            totalAmount: Number(sum) + parseInt(document.querySelector('#tipAmount').value, 10),
            tipAmount: parseInt(document.querySelector('#tipAmount').value, 10),
            paymentType: document.querySelector('#paymentType').value,
            orderType: order.orderType,
            date: new Date().toLocaleString()
          };
          createRevenueNode(revenueObject).then((orderArray) => renderOrders(orderArray));
        })
      );
    }
  });
};

export default closeOrder;
