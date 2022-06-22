import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';
import loginPageBackground from '../components/loginPageBackground';
import users from '../../../sample_data/users.json';
import startAppUser from './startAppUser';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line arrow-parens
      if (users.filter(currentUser => currentUser.uid === firebase.auth.user.id).length !== 0) {
        startApp(user);
      } else {
        startAppUser(user);
      }
    } else {
      loginButton();
      loginPageBackground();
    }
  });
};

export default checkLoginStatus;
