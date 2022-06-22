import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import loginHomeUser from '../components/pages/loginHomeUser';
import formEvents from '../events/formEvents';

const startAppUser = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.getElementById('login-form-container').style.backgroundImage = '';
  console.warn(user.uid);
  domBuilder();
  navBar(user);
  logoutButton(user);
  loginHomeUser(user);
  navEvents(user);
  domEvents(user);
  formEvents(user);
};

export default startAppUser;
