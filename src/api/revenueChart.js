import Chart from 'chart.js/auto';
import revenueObj from './revenueDataFunctions';

const data = revenueObj;
const ctx = document.querySelector('#revenueChart');

const config = {
  type: 'line',
  datasets: data,
};

const revenueChart = new Chart(
  ctx,
  config
);

export default revenueChart;
