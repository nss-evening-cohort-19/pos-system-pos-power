import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="view-order" class="nav-link" aria-current="page" href="#">View Order</a>
          </li>
          <li class="nav-item">
            <a id="create-order" class="nav-link" href="#">Create an Order</a>
          </li>
        </ul>
        </div>
        <div class="mb-3">
          <input type="text" class="form-control" id="searchBar-input" placeholder="Search Orders">
        </div>
        <a href='#' id="logout-btn">Logout
        </a>
    </div>
  </nav>
  `;
  renderToDom('#navigation', domString);
};

export default navBar;
