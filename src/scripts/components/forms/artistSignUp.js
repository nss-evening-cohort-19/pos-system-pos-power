import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const artistSignUp = () => {
  clearDom();
  const domString = `
  <form id="talent-apply">
    <h2>Want to Perform Here?</h2>
    <h5>Send Us Some Info and We Wil Get Back to You.</h5>
    <br>
    <br>
    <div class="mb-3">
      <label for="artist-name" class="form-label">What Should We Call You?</label>
      <input type="text" class="form-control" id="submit-name" placeholder="Artist Name" required>
    </div>
    <br>
    <div class="mb-3">
      <label for="submit-email" class="form-label">How Can We Reach You?</label>
      <input type="email" class="form-control" id="submit-email" placeholder="email address" required>
    </div>
    <div class="mb-3">
      <input type="tel" class="form-control" id="submit-email" placeholder="phone number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
    </div>
    <br>
    <div class="mb-3">
      <label for="submit-music" class="form-label">Where Can We Hear to Your Music?</label>
      <input type="url" class="form-control" id="submit-music" placeholder="Share It Here" required>
    </div>
    <br>
    <div class="mb-3">
      <label for="about-you" class="form-label">Anything Else We Should Know?</label>
      <textarea class="form-control" id="about-you" rows="5">Tell Us Here</textarea>
    </div>
    <button id="submit-application" class="btn btn-secondary">Submit</button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default artistSignUp;
