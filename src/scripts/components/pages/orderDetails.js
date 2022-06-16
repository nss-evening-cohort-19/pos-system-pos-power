import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyItems = () => {
  document.querySelector('#view').innerHTML = '<h2>No Items in Order</h2>';
};

const orderDetails = (obj) => {
  clearDom();
  const itemArray = Object.values(obj.itemObj);
  if (itemArray.length) {
    let domString = '<div id="cardContainer" class="container order-container">';
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
    renderToDOM('#view', domString);
  } else {
    emptyItems();
  }
};

export default orderDetails;
