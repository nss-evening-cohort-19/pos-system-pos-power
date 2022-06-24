import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const talentForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-talent--${obj.firebaseKey}` : 'submit-talent'}" class="mb-4 talentForm">
      <div class="form-group">
        <label for="talent_name">Artist Name</label>
        <input type="text" class="form-control" id="talent_name" aria-describedby="talent_name" placeholder="Enter Artist Name" value="${obj.talent_name || ''}" required>
      </div>
      <div class="form-group">
      <label for="price">Artist Image</label>
      <input type="url" class="form-control" placeholder="Image Url" id="imageUrl" aria-describedby="imageUrl" value="${obj.imageUrl || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Artist Email</label>
      <input type="email" class="form-control" placeholder="Enter E-mail" id="talent_email" aria-describedby="talent_email" value="${obj.talent_email || ''}" required>
    </div>
    <div class="form-group">
      <label for="description">Artist Phone Number</label>
      <input type="tel" class="form-control" placeholder="123-456-7890" id="talent_phone" aria-describedby="talent_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value="${obj.talent_phone || ''}" required>
    </div>
      <button id="talent-submit-btn" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Talent' : 'Submit Talent'}
      </button>
    </form>`;

  const filterBookingsButtons = `<div class="btn-group" role="group" aria-label="Basic example" id="show-type">
    <button type="button" class="btn btn-secondary" id="all-shows">All Shows</button>
    <button type="button" class="btn btn-secondary" id="virtual-shows">Virtual Shows</button>
    <button type="button" class="btn btn-secondary" id="in-person-shows">In Person Shows</button>
    <button type="button" class="btn btn-secondary" id="book-new-show">Book New Show</button>
    <button type="button" class="btn btn-secondary" id="view-talent">View Talent</button>
    <button type="button" class="btn btn-secondary" id="book-talent">Book New Talent</button>
    </div>`;
  renderToDOM('#details-buttons', filterBookingsButtons);

  renderToDOM('#form-container', domString);
};

export default talentForm;
