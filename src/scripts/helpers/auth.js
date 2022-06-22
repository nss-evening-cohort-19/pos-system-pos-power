import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startAppAdmin from './startAppAdmin';
import loginPageBackground from '../components/loginPageBackground';
import users from '../../../sample_data/users.json';
import startAppUser from './startAppUser';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line arrow-parens
      if (users.find(adminUser => adminUser.uid === user.uid)) {
        startAppAdmin(user);
      // eslint-disable-next-line arrow-parens
      } else if (users.filter(adminUser => adminUser.uid !== user.uid)) {
        startAppUser(user);
      }
    } else {
      loginButton();
      loginPageBackground();
    }
  });
};

export default checkLoginStatus;
