import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const revenuePage = (revObj) => {
  clearDom();
  const domString = `
    <div id="revenuePageDiv">
      <h2 id="revenueHeader">REVENUE</h2>
      <h2 id="totalRevenue">TOTAL REVENUE: $${revObj.totalAmount}</h2>
      <p id="dateRangeTitle">DATE RANGE: ${revObj.earlyDate} - ${revObj.lateDate}</p>
      <p id="dateRangeInfo"></p>
      <p id="totalTipsTitle">TOTAL TIPS: $${revObj.tipAmount.toFixed(2)}</p>
      <p id="totalCallIn">TOTAL CALL IN ORDERS: ${revObj.callInOrders}</p>
      <p id="totalWalklIn">TOTAL WALK IN ORDERS: ${revObj.walkInOrders}</p>
      <p id="paymentType">PAYMENT TYPES:</p>
      <p id="cashPayments">CASH: ${revObj.cashOrders}</p>
      <p id="creditPayments">CREDIT: ${revObj.cardOrders}</p>
      <p id="mobilePayment">MOBILE: ${revObj.mobileOrders}</p>
    </div>`;

  renderToDOM('#view', domString);
};

export default revenuePage;
