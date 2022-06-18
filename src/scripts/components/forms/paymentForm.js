import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const paymentForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="paymentForm--${obj.firebaseKey}">
    <div class="form-group">
      <label for="select-payment">Select Payment Type</>
      <select class="form-control" id="paymentType">
        <option selected>Please Select Payment Type</option>
        <option id="cash" value="cash">Cash</option>
        <option id="mastercard" value="mastercard">Mastercard</option>
        <option id="visa "value="visa">Visa</option>
        <option id="americanExpress" value="americanExpress">American Express</option>
        <option id="discover" value="discover">Discover</option>
      </select>
    </div>
    <div class="form-group">
        <label for="price">Tip Amount</label>
        <input type="text" class="form-control" placeholder="Tip Amount" id="tipAmount">
    </div>
    <br>
    <button type="submit" id="close-order--${obj.firebaseKey}" class="btn btn-primary">Close Order
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentForm;
