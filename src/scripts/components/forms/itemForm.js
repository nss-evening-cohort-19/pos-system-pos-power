import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const itemForm = (obj = {}, orderId) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : `submit-item--${orderId}`}" class="mb-4 item-form-div">
      <div class="form-group">
        <label for="itemName">Item Name</label>
        <input type="text" class="form-control" id="item_name" aria-describedby="itemName" placeholder="Enter Item Name" value="${obj.item_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="text" class="form-control" placeholder="Item Price" id="item_price" aria-describedby="itemPrice" value="${obj.item_price || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Item Description</label>
        <input type="text" class="form-control" placeholder="Item Description" id="item_description" aria-describedby="itemDescription" value="${obj.item_description || ''}" required>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="${obj.onSale ? 'checked' : ''}" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        On Sale?
        </label>
      </div>
      <div class="form-group" id="select-order"></div>
      <br>
      <button id="submit-item-btn" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Item' : 'Submit Item'}
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  const filterBookingsButtons = `<div class="btn-group" role="group" aria-label="Basic example" id="show-type">
  <button type="button" class="btn btn-secondary" id="all-shows">All Shows</button>
  <button type="button" class="btn btn-secondary" id="virtual-shows">Virtual Shows</button>
  <button type="button" class="btn btn-secondary" id="in-person-shows">In Person Shows</button>
  <button type="button" class="btn btn-secondary" id="book-new-show">Book New Show</button>
  <button type="button" class="btn btn-secondary" id="view-talent">View Talent</button>
  <button type="button" class="btn btn-secondary" id="book-talent">Book New Talent</button>
  </div>`;
  renderToDOM('#details-buttons', filterBookingsButtons);
};

export default itemForm;
