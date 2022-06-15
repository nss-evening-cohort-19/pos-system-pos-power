import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav id="navBarDiv" class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <span class="icon" style="span" width:50px></span>
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
        <div id="right-nav">
          <div class="nav-item">
            <input type="text" class="form-control" id="searchBar-input" placeholder="Search Orders">
          </div>
          <div class="nav-item">
            <div id="logout-nav">Logout</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `;
  renderToDom('#navigation', domString);
};

export default navBar;
