import renderBookings from '../components/pages/bookings';
import { getAllBookings } from '../../api/bookingsData';
import renderTalent from '../components/pages/talent';
import { getTalent } from '../../api/talentData';

const viewBookings = (user) => {
  getAllBookings(user).then((response) => renderBookings(response));
};

const viewBookingsUser = (user) => {
  getAllBookings(user).then((response) => renderBookings(response));
};

const viewTalent = (user) => {
  getTalent(user).then((response) => renderTalent(response));
};

export { viewBookings, viewTalent, viewBookingsUser };
