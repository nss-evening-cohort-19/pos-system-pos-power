import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import loginHome from '../components/pages/loginHome';
import formEvents from '../events/formEvents';

const startAppAdmin = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.getElementById('login-form-container').style.backgroundImage = '';
  domBuilder();
  navBar();
  logoutButton();
  loginHome(user);
  navEvents(user);
  domEvents(user.uid);
  formEvents(user);
};

export default startAppAdmin;
