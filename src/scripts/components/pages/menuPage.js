import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyMenu = () => {
  document.querySelector('#view').innerHTML = '<h2>No Menu Items to Display</h2>';
};

const menu = (array) => {
  clearDom();
  if (array.length) {
    let domString = '<div id="menuContainer" class="container order-container">';
    array.forEach((menuItem) => {
      domString += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${menuItem.imgUrl}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${menuItem.title}</h5>
        <h5 class="card-price">${menuItem.price}</h5>
        <p class="card-text">${menuItem.description}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    });
    domString += '</div>';
    renderToDOM('#view', domString);
  } else {
    emptyMenu();
  }
};

export default menu;
