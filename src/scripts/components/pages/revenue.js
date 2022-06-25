import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const revenuePage = (revObj) => {
  clearDom();
  const domString = `
    <div class="container">
      <canvas id="revenueChart"></canvas> 
    </div>
    <div id="revenuePageDiv">
      <h2 id="revenueHeader">REVENUE</h2>
      <h2 id="totalRevenue">TOTAL REVENUE: $${revObj.totalAmount.toFixed(2)}</h2>
      <p id="dateRangeTitle">DATE RANGE: ${revObj.earlyDate} - ${revObj.lateDate}</p>

      <div class="modal-dialogue">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dateModal">Choose Custom Date Range</button>

        <div class="modal fade modal-dialog modal-dialog-scrollable" id="dateModal" tabindex="-1" aria-labelledby="dateModal" aria-hidden="true" data-backdrop="false">

          <div class="modal-dialog">
          
            <div class="modal-content">

              <div class="modal-header container-fluid">
                <p style="color:black;">Input Custom Date Range between <u>${revObj.earlyDate}</u> and <u>${revObj.lateDate}</u></p>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body searchDates">
                <form id="dateForm">
                  <label for="startDate">Start Date</label>
                  <input class="form-control" type="text" placeholder="Select Start Date" id="startDate" name="startDate" onfocus="(this.type='date')" required>
                  <input class="form-control" type="text" placeholder="Select End Date" id="endDate" name="endDate" onfocus="(this.type='date')" required>
              
                  <div class="modal-footer modalFooter">
                  <button type="submit" id="date-modal-submit" class="btn btn-success" aria-hidden:"true" data-bs-dismiss="modal">Submit</button>
                  </div>
                </form>
              </div>
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
