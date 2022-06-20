const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#login-form-container').innerHTML = '';
  document.querySelector('#details-buttons').innerHTML = '';
};

export default clearDom;
