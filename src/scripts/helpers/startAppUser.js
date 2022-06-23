import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domEventsUser from '../events/domEventsUser';
import navEventsUser from '../events/navEventsUser';
import loginHomeUser from '../components/pages/loginHomeUser';
import formEventsUser from '../events/formEventsUser';

const startAppUser = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.getElementById('login-form-container').style.backgroundImage = '';
  domBuilder(user.uid);
  navBar(user);
  logoutButton(user.uid);
  loginHomeUser(user);
  navEventsUser(user);
  domEventsUser(user.uid);
  formEventsUser(user.uid);
};

export default startAppUser;
