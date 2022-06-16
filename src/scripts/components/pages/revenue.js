import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const revenuePage = () => {
  clearDom();
  const domString = `
    <div id="revenuePageDiv">
      <h2 id="revenueHeader">REVENUE</h2>
      <h2 id="totalRevenue">TOTAL REVENUE: $Placeholder</h2>
      <p id="dateRangeTitle">DATE RANGE:</p>
      <p id="dateRangeInfo">Placeholder</p>
      <p id="totalTipsTitle">TOTAL TIPS: $Placeholder</p>
      <p id="totalCallIn">TOTAL CALL IN ORDERS: Placeholder</p>
      <p id="totalWalklIn">TOTAL WALK IN ORDERS: Placeholder</p>
      <p id="paymentType">PAYMENT TYPES:</p>
      <p id="cashPayments">CASH: Placeholder</p>
      <p id="creditPayments">CREDIT: Placeholder</p>
      <p id="mobilePayment">MOBILE: Placeholder</p>
    </div>`;

  renderToDOM('#view', domString);
};

export default revenuePage;
