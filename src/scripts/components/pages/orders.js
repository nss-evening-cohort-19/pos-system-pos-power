import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyOrders = () => {
  document.querySelector('#view').innerHTML = '<h2>No Orders to Display</h2>';
};

const renderOrders = (array) => {
  clearDom();
  if (array.length) {
    let domString = '<div class="container order-container">';
    array.forEach((card) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body order-card">
        <h5 class="card-title">${card.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${card.orderStatus}</h6>
        <p class="card-text">${card.customerPhoneNumber}</p>
        <p class="card-text">${card.customerEmail}</p>
        <p class="card-text">${card.orderType}</p>
        <button class="btn btn-primary" id="edit-order-btn--${card.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete-order-btn--${card.firebaseKey}">Delete</button>
      </div>
    </div>`;
    });
    domString += '</div>';
    renderToDOM('#view', domString);
  } else {
    emptyOrders();
  }
};

export default renderOrders;
