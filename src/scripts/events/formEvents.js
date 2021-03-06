import { createBooking, updateBooking } from '../../api/bookingsData';
import {
  updateItem, createItem
} from '../../api/itemsData';
import { viewOrderDetails } from '../../api/mergedData';
import {
  createOrder, updateOrder
} from '../../api/ordersData';
import { createTalent, updateTalent } from '../../api/talentData';
import closeOrder from '../components/closeOrder';
import renderBookings from '../components/pages/bookings';
import orderDetails from '../components/pages/orderDetails';
import renderOrders from '../components/pages/orders';
import renderTalent from '../components/pages/talent';

const formEvents = (user, uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-order')) {
      const newOrder = {
        customerEmail: document.querySelector('#customerEmail').value,
        customerPhoneNumber: document.querySelector('#customerPhoneNumber').value,
        last_name: document.querySelector('#last_name').value,
        orderStatus: 'open',
        orderType: document.querySelector('#orderType').value,
        uid,
      };
      createOrder(newOrder).then((response) => renderOrders(response));
    }
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const updatedOrder = {
        customerEmail: document.querySelector('#customerEmail').value,
        customerPhoneNumber: document.querySelector('#customerPhoneNumber').value,
        last_name: document.querySelector('#last_name').value,
        orderStatus: 'open',
        orderType: document.querySelector('#orderType').value,
        firebaseKey,
        uid
      };
      updateOrder(updatedOrder).then((orderArray) => renderOrders(orderArray));
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        firebaseKey,
        item_name: document.querySelector('#item_name').value,
        item_price: document.querySelector('#item_price').value,
      };
      updateItem(itemObject)
        .then((itemArray) => {
          itemArray.forEach((item) => {
            if (firebaseKey === item.firebaseKey) {
              viewOrderDetails(item.orderId).then((orderItemObject) => orderDetails(orderItemObject));
            }
          });
        });
    }

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const itemObject = {
        item_name: document.querySelector('#item_name').value,
        item_price: document.querySelector('#item_price').value,
        orderId: firebaseKey
      };
      createItem(itemObject)
        .then((itemArray) => {
          itemArray.forEach((item) => {
            if (firebaseKey === item.orderId) {
              viewOrderDetails(item.orderId).then((orderItemObject) => orderDetails(orderItemObject));
            }
          });
        });
    }

    if (e.target.id.includes('update-booking')) {
      const [, firebaseKey] = e.target.id.split('--');
      const updatedShow = {
        talent_name: document.querySelector('#talent_name').value,
        performanceDate: document.querySelector('#show-date').value,
        performanceType: document.querySelector('#performanceType').value,
        uid,
        firebaseKey,
      };
      updateBooking(updatedShow).then((bookingArray) => renderBookings(bookingArray));
    }

    if (e.target.id.includes('update-talent')) {
      const [, firebaseKey] = e.target.id.split('--');
      const artistObject = {
        firebaseKey,
        talent_name: document.querySelector('#talent_name').value,
        imageUrl: document.querySelector('#imageUrl').value,
        talent_email: document.queryCommandValue('#talent_email').value,
        talent_phone: document.queryCommandValue('#talent_phone').value,
      };
      updateTalent(artistObject).then((artistArray) => renderTalent(artistArray));
    }

    if (e.target.id.includes('paymentForm')) {
      const [, firebaseKey] = e.target.id.split('--');
      closeOrder(firebaseKey);
    }
    if (e.target.id.includes('submit-booking')) {
      const newShow = {
        talent_name: document.querySelector('#talent_name').value,
        imageUrl: document.querySelector('#imageUrl').value,
        performanceDate: document.querySelector('#show-date').value,
        performanceType: document.querySelector('#performanceType').value,
        uid,
      };
      createBooking(newShow).then((response) => renderBookings(response));
    }

    if (e.target.id.includes('submit-talent')) {
      const newArtist = {
        talent_name: document.querySelector('#talent_name').value,
        imageUrl: document.querySelector('#imageUrl').value,
        talent_email: document.querySelector('#talent_email_div').value,
        talent_phone: document.querySelector('#talent_phone_div').value,
      };
      createTalent(newArtist).then((response) => renderTalent(response));
    }
  });
};

export default formEvents;
