import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const loginHomeUser = (user) => {
  clearDom();
  const domString = `
  <div id="loginHomeDiv">
    <h5 id="welcomeHome">Welcome, ${user.displayName}!</h5>
    <button id="ordersHome">View My Orders</button>
    <button id="createHome">Create Order</button>
  </div>`;
  renderToDOM('#view', domString);
};

export default loginHomeUser;
