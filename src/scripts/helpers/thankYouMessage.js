import clearDom from './clearDom';
import renderToDOM from './renderToDom';

const thankYouMessage = () => {
  clearDom();
  const domString = `
  <h2 id="thanks">Thank You For Your Interest. We Will Get Back to You Soon.</h2>`;

  renderToDOM('#view', domString);
};

export default thankYouMessage;
