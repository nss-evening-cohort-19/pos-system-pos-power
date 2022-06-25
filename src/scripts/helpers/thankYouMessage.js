import clearDom from './clearDom';
import renderToDOM from './renderToDom';

const thankYouMessage = () => {
  clearDom();
  const domString = `
  <h5 id="thanks">Thank You For Your Interest. We Will Get Back to You Soon.</h5>`;

  renderToDOM('#view', domString);
};

export default thankYouMessage;
