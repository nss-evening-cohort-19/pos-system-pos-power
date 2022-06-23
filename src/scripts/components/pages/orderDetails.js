import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const orderDetails = (obj = {}) => {
  clearDom();
  const { itemArray } = obj;
  if (itemArray.length) {
    let domString = '<div id="itemsContainer">';
    itemArray.forEach((menuItem) => {
      domString += `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${menuItem.imgUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${menuItem.item_name}</h5>
        <h6 class="card-price">${menuItem.item_price}</h6>
        <p class="card-text">${menuItem.item_description}</p>
        <h6 class="card-subtitle mb-2">${menuItem.onSale ? 'On Sale' : ''}</h6>
        <button class="btn btn-danger" id="delete-from-order-btn--${menuItem.firebaseKey}">Remove From Order</button>
      </div>
    </div>`;
    });
    domString += `
    </div>`;
    const buttonString = `
    <div id=orderDetailsButtons>
      <button id="goToPaymentButton--${obj.firebaseKey}" class="btn btn-primary goToPaymentBtn">Go To Payment</button>
    </div>`;
    renderToDOM('#view', domString);
    renderToDOM('#details-buttons', buttonString);
  } else {
    const htmlString = `
    <h2 id="no-items">No Items in Order</h2>`;
    const buttonString = `
    <div id=orderDetailsButtons-empty>
      <button id="goToPaymentButton" class="btn btn-primary goToPaymentBtn">Go To Payment</button>
    </div>`;
    renderToDOM('#view', htmlString);
    renderToDOM('#details-buttons', buttonString);
  }
};

export default orderDetails;
