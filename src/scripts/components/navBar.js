import renderToDom from '../helpers/renderToDom';
import logo from '../../../instructions/hhpw-record-neon.png';

const navBar = () => {
  const domString = `
  <nav id="navBarDiv" class="navbar navbar-expand-lg navbar-dark mb-5">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="navBarToggleBtn">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a id="logo-image" class="navbar-brand">
        <img id="navLogo" src="${logo}">
      </a>
      <div class="navbar-collapse collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a id="home-nav" class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a id="view-order" class="nav-link" aria-current="page" href="#">View Orders</a>
          </li>
          <li class="nav-item">
            <a id="create-order" class="nav-link" href="#">Create an Order</a>
          </li>
          <li class="nav-item">
            <a id="menu-nav" class="nav-link" href="#">Menu</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <form id="search-bar-div" class="nav-item" onsubmit="return false">
            <input type="search" class="form-control" id="searchBar-input" placeholder="Search Orders">
          </form>
          <div id="logout-nav-div" class="nav-link">
            <div id="logout-nav">
              Logout
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  `;
  renderToDom('#navigation', domString);
};

export default navBar;
