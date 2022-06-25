import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyBookings = () => {
  document.querySelector('#view').innerHTML = '<h2 id="empty-bookings">No Bookings Display</h2>';
};

const renderBookings = (array) => {
  clearDom();
  if (array.length) {
    const filterBookingsButtons = `<div class="btn-group" role="group" aria-label="Basic example" id="show-type">
    <button type="button" class="btn btn-secondary" id="all-shows">All Shows</button>
    <button type="button" class="btn btn-secondary" id="virtual-shows">Virtual Shows</button>
    <button type="button" class="btn btn-secondary" id="in-person-shows">In Person Shows</button>
    <button type="button" class="btn btn-secondary" id="book-new-show">Book New Show</button>
    <button type="button" class="btn btn-secondary" id="view-talent">View Talent</button>
    <button type="button" class="btn btn-secondary" id="book-talent">Book New Talent</button>
    </div>`;
    renderToDOM('#details-buttons', filterBookingsButtons);
    let domString = '<div id="cardContainer" class="container order-container">';
    array.forEach((card) => {
      domString += `<div style="width: 18rem;">
      <div class="card-body order-card">
        <img class="card-img-top" src="${card.imageUrl}">
        <h5 class="card-title">${card.talent_name}</h5>
        <h6 class="card-subtitle mb-2">${card.performanceType}</h6>
        <p class="card-text">Scheduled Date: ${card.performanceDate}</p>
        <button class="btn btn-primary" id="edit-booking-btn--${card.firebaseKey}">Edit</button>
        <button class="btn btn-danger" id="delete-booking-btn--${card.firebaseKey}">Delete</button>
      </div>
    </div>`;
    });
    domString += '</div>';
    renderToDOM('#view', domString);
  } else {
    const filterBookingsButtons = `<div class="btn-group" role="group" aria-label="Basic example" id="show-type">
    <button type="button" class="btn btn-secondary" id="all-shows">All Shows</button>
    <button type="button" class="btn btn-secondary" id="virtual-shows">Virtual Shows</button>
    <button type="button" class="btn btn-secondary" id="in-person-shows">In Person Shows</button>
    <button type="button" class="btn btn-secondary" id="book-new-show">Book New Show</button>
    <button type="button" class="btn btn-secondary" id="view-talent">View Talent</button>
    <button type="button" class="btn btn-secondary" id="book-talent">Book New Talent</button>
    </div>`;
    emptyBookings();
    renderToDOM('#details-buttons', filterBookingsButtons);
  }
};

export default renderBookings;
