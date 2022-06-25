import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDom';

const artistSignUp = () => {
  clearDom();
  const domString = `
  <form id="talent-apply">
    <div class="mb-3">
      <h3>Want to Perform Here?</h3>
      <h2>Send Us Some Info and We Wil Get Back to You.</h2>
      <label for="submit-email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="submit-email" placeholder="name@example.com">
    </div>
    <div class="mb-3">
      <label for="about-you" class="form-label">Tell Us About Yourself</label>
      <textarea class="form-control" id="about-you" rows="3"></textarea>
    </div>
    <button id="submit-application" class="btn btn-secondary">Submit</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default artistSignUp;
