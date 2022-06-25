import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import loginHome from '../components/pages/loginHome';
import formEvents from '../events/formEvents';
import navBarAdmin from '../components/navBarAdmin';

const startAppAdmin = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  document.getElementById('login-form-container').style.backgroundImage = '';
  domBuilder();
  navBarAdmin();
  logoutButton();
  loginHome(user);
  navEvents(user);
  domEvents();
  formEvents();
};

export default startAppAdmin;
