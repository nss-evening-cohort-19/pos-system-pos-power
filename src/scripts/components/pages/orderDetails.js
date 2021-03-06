import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (obj = {}) => {
  clearDom();
  const { itemArray } = obj;
  if (itemArray.length) {
    let domString = '<div id="itemsContainer">';
    itemArray.forEach((menuItem) => {
      domString += `
      <div id="item-card" class="card" style="width: 18rem;">
      <img class="card-img-top" src="${menuItem.imageUrl}" alt="Card image cap">
      <div>
        <h5 class="card-title">${menuItem.item_name}</h5>
        <h6 class="card-price">${menuItem.item_price}</h6>
        <p class="card-text">${menuItem.item_description}</p>
        <h6 class="card-subtitle mb-2">${menuItem.onSale ? 'On Sale' : ''}</h6>
        <button class="btn btn-danger" id="delete-from-order-btn--${menuItem.firebaseKey}">Remove From Order</button>
        <br>
        <br>
      </div>
    </div>`;
    });
    domString += `
    </div>`;
    const buttonString = `
    <div id=orderDetailsButtons>
      <button id="addItemButton--${obj.firebaseKey}" class="btn btn-success addItemBtn">Add From Menu</button>
      <button id="goToPaymentButton--${obj.firebaseKey}" class="btn btn-primary goToPaymentBtn">Go To Payment</button>
    </>`;
    renderToDOM('#view', domString);
    renderToDOM('#details-buttons', buttonString);
  } else {
    const htmlString = `
    <h2 id="no-items">No Items in Order</h2>`;
    const buttonString = `
    <div id=orderDetailsButtons-empty>
      <button id="addItemButton--${obj.firebaseKey}" class="btn btn-success addItemBtn">Add From Menu</button>
      <button id="goToPaymentButton" class="btn btn-primary goToPaymentBtn">Go To Payment</button>
    </div>`;
    renderToDOM('#view', htmlString);
    renderToDOM('#details-buttons', buttonString);
  }
};

export default orderDetails;
