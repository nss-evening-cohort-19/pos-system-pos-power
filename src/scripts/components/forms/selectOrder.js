import { getAllOrders } from '../../../api/ordersData';
import renderToDOM from '../../helpers/renderToDom';

const selectOrder = (orderId) => {
  let domString = `<label for="order">Select an Order</label>
    <select class="form-control" id="order_id" required>
    <option value="">Select an Order</option>`;

  getAllOrders().then((ordersArray) => {
    ordersArray.forEach((order) => {
      domString += `
      <option
        value="${order.firebaseKey}"
        ${orderId === order.firebaseKey ? 'selected' : ''}>
          ${order.last_name}
      </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-order', domString);
  });
};

export default selectOrder;
