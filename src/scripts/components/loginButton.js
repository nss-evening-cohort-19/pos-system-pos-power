import signIn from '../helpers/signIn';
import logo from '../../../instructions/hhpw-record.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
  <img src=${logo} class="logo">
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
  `;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
