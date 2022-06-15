import renderToDom from '../helpers/renderToDom';
import logo from '../../../instructions/hhpw-record.png';

const navBar = () => {
  const domString = `
  <nav id="navBarDiv" class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li id="logo-image">
            <img id="navLogo" src=${logo}>
          </li>
          <li class="nav-item">
            <a id="view-order" class="nav-link" aria-current="page" href="#">View Orders</a>
          </li>
          <li class="nav-item">
            <a id="create-order" class="nav-link" href="#">Create an Order</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <form id="search-bar-div" class="nav-item">
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

export default navBar;
