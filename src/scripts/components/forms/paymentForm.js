import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const paymentForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="paymentForm--${obj.firebaseKey}">
    <div class="form-group">
      <label for="select-payment">Select Payment Type</>
      <select class="form-control" id="paymentType" required>
        <option selected value="">Please Select Payment Type</option>
        <option id="cash" value="cash">Cash</option>
        <option id="credit" value="credit">Credit</option>
        <option id="check "value="check">Check</option>
        <option id="mobile" value="mobile">Mobile</option>
      </select>
    </div>
    <div class="form-group">
        <label for="price">Tip Amount</label>
        <input type="text" class="form-control" placeholder="Tip Amount" id="tipAmount" required>
    </div>
    <br>
    <button type="submit" id="close-order--${obj.firebaseKey}" class="btn btn-primary">Close Order
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentForm;
