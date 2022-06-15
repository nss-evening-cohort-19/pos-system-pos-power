import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const orderForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="orderName">Order Name</label>
        <input type="text" class="form-control" id="orderName" aria-describedby="orderName" placeholder="Enter Order Name" value="${obj.last_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone">Customer Phone Number</label>
        <input type="text" class="form-control" placeholder="Phone Number" id="phoneNumber">${obj.customerPhoneNumber || ''}</input>
      </div>
      <div class="form-group">
        <label for="email">Customer Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email address" value="${obj.customerEmail || ''}" required>
      </div>
      <select class="custom-select">
        <option selected>Select Order Type</option>
        <option value="call_in">Call-in</option>
        <option value="walk_in">Walk-in</option>
      </select>
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default orderForm;
