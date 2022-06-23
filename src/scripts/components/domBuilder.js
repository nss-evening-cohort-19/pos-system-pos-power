import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id ="details-buttons"></div>
    <div id="form-container"></div>
    <div id="orderStatus-button"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
