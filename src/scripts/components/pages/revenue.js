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
      <p id="dateRangeInfo"></p>
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
