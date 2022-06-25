import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyMenu = () => {
  document.querySelector('#view').innerHTML = '<h2>No Menu Items to Display</h2>';
};

const viewMenu = (array) => {
  clearDom();
  if (array.length) {
    let domString = '<div id="menuContainer" class="container order-container">';
    array.forEach((menuObject) => {
      domString += `<div id="menu-items" class="card" style="width: 18rem;">
      <img class="card-img-top" id="menuImages" src="${menuObject.imageUrl}" alt="menu item image">
      <div id="menuCards">
        <h5 class="card-title">${menuObject.item_name}</h5>
        <h6 class="card-price">${menuObject.item_price}</h6>
        <p class="card-text">${menuObject.item_description}</p>
        <h6 class="card-subtitle mb-2">${menuObject.onSale ? 'On Sale' : ''}</h6>
        <a href="#" id="add-menuItem--${menuObject.firebaseKey}" class="btn btn-primary">Add to Order</a>
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
