import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const paymentForm = () => {
  clearDom();
  const domString = `
  <form id="paymentForm">
    <div class="form-group">
      <label for="exampleFormControlSelect1">Select Payment Type</>
      <select class="form-control" id="paymentType">
        <option selected>Please Select Payment Type</option>
        <option value="cash">Cash</option>
        <option value="mastercard">Mastercard</option>
        <option value="visa">Visa</option>
        <option value="americanExpress">American Express</option>
        <option value="discover">Discover</option>
      </select>
    </div>
    <div class="form-group">
        <label for="price">Tip Amount</label>
        <input type="text" class="form-control" placeholder="Tip Amount" id="tipAmount">
    </div>
    <br>
    <button type="submit" class="btn btn-primary">Submit Item
    </button>
  </form>`;

  renderToDOM('#form-container', domString);
};

export default paymentForm;
