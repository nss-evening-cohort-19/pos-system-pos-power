import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const itemForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
<<<<<<< HEAD
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}" class="mb-4 item-form-div">
=======
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}" class="mb-4">
>>>>>>> main
      <div class="form-group">
        <label for="itemName">Item Name</label>
        <input type="text" class="form-control" id="item_name" aria-describedby="itemName" placeholder="Enter Item Name" value="${obj.item_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="text" class="form-control" placeholder="Item Price" id="item_price" aria-describedby="itemPrice" value="${obj.item_price || ''}" required>
      </div>
      <div class="form-group" id="select-order"></div>
      <br>
      <button id="submit-item-btn" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Item' : 'Submit Item'}
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default itemForm;
