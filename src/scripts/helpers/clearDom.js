const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#details-buttons').innerHTML = '';
  document.querySelector('#orderStatus-button').innerHTML = '';
};

export default clearDom;
