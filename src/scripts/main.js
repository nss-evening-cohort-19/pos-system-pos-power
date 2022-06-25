// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import '../styles/main.scss';
import 'bootstrap'; // import bootstrap elements and js
import checkLoginStatus from './helpers/auth';

const init = () => {
  checkLoginStatus();
};

init();
