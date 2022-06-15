import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navEvents(user);
  domEvents(user);
};

export default startApp;
