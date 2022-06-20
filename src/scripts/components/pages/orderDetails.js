import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (obj = {}) => {
  clearDom();
  const { itemArray } = obj;
  if (itemArray.length) {
    let domString = '<div id="itemsContainer">';
    itemArray.forEach((card) => {
      domString += `
      <div style="width: 30rem;">
        <div class="card-body order-card">
          <h5 class="card-title">${card.item_name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${card.item_price}</h6>
          <button class="btn btn-primary" id="edit-item-btn--${card.firebaseKey}">Edit</button>
          <button class="btn btn-danger" id="delete-item-btn--${card.firebaseKey}">Delete</button>
        </div>
    </div>`;
    });
    domString += `
    </div>
    <div id=orderDetailsButtons>
      <button id="addItemButton" class="btn btn-success addItemBtn">Add Item</button>
      <button id="goToPaymentButton--${obj.firebaseKey}" class="btn btn-primary goToPaymentBtn">Go To Payment</button>
    </div>`;
    renderToDOM('#view', domString);
  } else {
    const htmlString = `
    <h2>No Items in Order</h2>
    <div id=orderDetailsButtons>
      <button id="addItemButton" class="btn btn-success addItemBtn">Add Item</button>
      <button  class="btn btn-primary goToPaymentBtn">Go To Payment</button>
    </div>`;
    renderToDOM('#view', htmlString);
  }
};

export default orderDetails;
