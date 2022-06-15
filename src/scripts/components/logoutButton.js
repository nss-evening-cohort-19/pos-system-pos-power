import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../helpers/clearDom';
import loginButton from './loginButton';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDom();
  loginButton();
};

const logoutButton = () => {
  const domString = '<a href="#" class="nav-link" id="google-auth2">Log Out</a>';
  document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#google-auth2').addEventListener('click', signMeOut);
};

export default logoutButton;
