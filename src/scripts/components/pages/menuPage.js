import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyMenu = () => {
  document.querySelector('#view').innerHTML = '<h2>No Menu Items to Display</h2>';
};

const viewMenu = (array) => {
  clearDom();
  if (array.length) {
    let domString = '<div id="menuContainer" class="container order-container">';
    array.forEach((menuItem) => {
      domString += `<div id="menu-items" class="card" style="width: 18rem;">
      <img class="card-img-top" src="${menuItem.imgUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${menuItem.item_name}</h5>
        <h6 class="card-price">${menuItem.item_price}</h6>
        <p class="card-text">${menuItem.item_description}</p>
        <h6 class="card-subtitle mb-2">${menuItem.onSale ? 'On Sale' : ''}</h6>
        <a href="#" id="add-menuItem--${menuItem.firebaseKey}" class="btn btn-primary">Add to Order</a>
      </div>
    </div>`;
    });
    domString += '</div>';
    renderToDOM('#view', domString);
  } else {
    emptyMenu();
  }
};

export default viewMenu;
