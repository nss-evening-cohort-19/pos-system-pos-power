import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';
import loginPageBackground from '../components/loginPageBackground';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
      loginPageBackground();
    }
  });
};

export default checkLoginStatus;
