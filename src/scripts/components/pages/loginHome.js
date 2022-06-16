import renderToDOM from '../../helpers/renderToDom';

const loginHome = (user) => {
  const domString = `
  <div id="loginHomeDiv">
    <h5 id="welcomeHome">Welcome, ${user.displayName}!</h5>
    <button id="ordersHome">View Orders</button>
    <button id="createHome">Create an Order</button>
    <button id="revenueHome">View Revenue</button>
  </div>`;
  renderToDOM('#view', domString);
};

export default loginHome;
