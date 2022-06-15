import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import loginHome from '../components/pages/loginHome';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  document.querySelector('#login-form-container').innerHTML = '';
  domBuilder();
  navBar();
  logoutButton();
  loginHome(user);
  navEvents();
};

export default startApp;
