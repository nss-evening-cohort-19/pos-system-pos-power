import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const revenuePage = (revObj) => {
  clearDom();
  const domString = `
    <div id="revenuePageDiv">
      <h2 id="revenueHeader">REVENUE</h2>
      <h2 id="totalRevenue">TOTAL REVENUE: $${revObj.totalAmount.toFixed(2)}</h2>
      <p id="dateRangeTitle">DATE RANGE: ${revObj.earlyDate} - ${revObj.lateDate}</p>

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Choose Custom Date Range</button>
      <div class="modal fade modal-dialog modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header container-fluid">
              <p style="color:black;">Input Custom Date Range between Given Dates</p>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body searchDates">
              <form>
                <div class=input-group mb-3>
                  <span class="input-group-text">Start Date</span>
                  <input type="text" aria-label="Start Date" class="form-control" placeholder="${revObj.earlyDate}" id="start-date">
                </div>
                <div class=input-group mb-3>
                  <span class="input-group-text">End Date</span>
                  <input type="text" aria-label="End Date" class="form-control" placeholder="${revObj.lateDate}" id="end-date">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" id="submit-date-range">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <p id="totalTipsTitle">TOTAL TIPS: $${revObj.tipAmount.toFixed(2)}</p>
      <p id="totalCallIn">TOTAL CALL IN ORDERS: ${revObj.callInOrders}</p>
      <p id="totalWalklIn">TOTAL WALK IN ORDERS: ${revObj.walkInOrders}</p>
      <p id="paymentType">PAYMENT TYPES:</p>
      <p id="cashPayments">CASH: ${revObj.cashOrders}</p>
      <p id="creditPayments">CREDIT: ${revObj.cardOrders}</p>
      <p id="mobilePayment">MOBILE: ${revObj.mobileOrders}</p>
      <p id="mobilePayment">CHECK: ${revObj.checkOrders}</p>
    </div>`;

  renderToDOM('#view', domString);
};

export default revenuePage;
