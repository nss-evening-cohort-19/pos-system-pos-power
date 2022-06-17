import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import loginHome from '../components/pages/loginHome';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  domBuilder();
  navBar();
  logoutButton(user);
  loginHome(user);
  navEvents(user);
  domEvents(user);
  formEvents(user);
};

export default startApp;
