import renderToDom from '../helpers/renderToDom';
import logo from '../../../instructions/hhpw-record-neon.png';

const navBarAdmin = () => {
  const domString = `
  <nav id="navBarDiv" class="navbar navbar-expand-lg navbar-dark mb-5">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li id="logo-image">
            <img id="navLogo" src=${logo}>
          </li>
          <li class="nav-item">
            <a id="home-nav" class="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a id="view-order" class="nav-link" data-bs-toggle="collapse"  data-bs-target=".navbar-collapse.show" aria-current="page" href="#">View Orders</a>
          </li>
          <li class="nav-item">
            <a id="create-order" class="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="#">Create an Order</a>
          </li>
          </li>
          <li class="nav-item">
            <a id="menu-nav" class="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="#">Menu</a>
          </li>
          <li class="nav-item">
            <a id="talent-bookings-nav" class="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" href="#">Talent Bookings</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <form id="search-bar-div" class="nav-item" onsubmit="return false">
            <input type="search" class="form-control" id="searchBar-input" placeholder="Search Orders">
          </form>
          <div id="logout-nav-div" class="nav-link">
            <div id="logout-nav">Logout</div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  `;
  renderToDom('#navigation', domString);
};

export default navBarAdmin;
