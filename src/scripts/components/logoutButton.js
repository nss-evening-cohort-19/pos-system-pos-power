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
  const domString = '<a href="#" class="nav-link" id="logout-auth">Log Out</a>';
  document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#logout-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
