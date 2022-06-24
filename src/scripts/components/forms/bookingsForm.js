import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const bookingsForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-booking--${obj.firebaseKey}` : 'submit-booking'}" class="mb-4 bookingsForm">
      <div class="form-group">
        <label for="talent_name">Talent Name</label>
        <input type="text" class="form-control" id="talent_name" aria-describedby="talent_name" placeholder="Enter Artist/Band Name" value="${obj.talent_name || ''}" required>
      </div>
      <div class="form-group">
      <label for="show-date">Date of Show</label>
      <input type="date" class="form-control" id="show-date" placeholder="Date" value="${obj.showDate || ''}" required>
    </div>
      <br>
      <select class="custom-select" id="performanceType" required>
        <option value="">Select Performance Type</option>
        <option value="in-person" ${obj.performanceType === 'in=person' ? 'selected' : ''}>In Person</option>
        <option value="virtual" ${obj.performanceType === 'virtual' ? 'selected' : ''}>Virtual</option>
      </select>
      <hr id="hr-booking">
      <button id="booking-submit-btn" type="submit" class="btn btn-primary">${obj.firebaseKey ? 'Update Booking' : 'Book Talent'}
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

export default bookingsForm;
