import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const loginHome = (user) => {
  clearDom();
  const domString = `
  <div id="loginHomeDiv">
    <h5 id="welcomeHome">Welcome, ${user.displayName}!</h5>
    <button id="ordersHome">View Orders</button>
    <button id="createHome">Create Order</button>
    <button id="revenueHome">View Revenue</button>
  </div>`;
  renderToDOM('#view', domString);
};

export default loginHome;
