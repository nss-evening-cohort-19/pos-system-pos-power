import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const orderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="last_name">Order Name</label>
        <input type="text" class="form-control" id="last_name" aria-describedby="last_name" placeholder="Enter Order Name" value="${obj.last_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone">Customer Phone Number</label>
        <input type="text" class="form-control" placeholder="Phone Number" id="customerPhoneNumber" value="${obj.customerPhoneNumber || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Customer Email</label>
        <input type="email" class="form-control" id="customerEmail" placeholder="Enter email address" value="${obj.customerEmail || ''}" required>
      </div>
      <br>
      <select class="custom-select" id="orderType" required>
        <option value="">Select Order Type</option>
        <option value="call-in" ${obj.orderType === 'call-in' ? 'selected' : ''}>Call-in</option>
        <option value="walk-in" ${obj.orderType === 'walk-in' ? 'selected' : ''}>Walk-in</option>
      </select>
      <hr id="hr-order">
      <button id="order-submit-btn" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Order' : 'Submit Order'}
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default orderForm;
