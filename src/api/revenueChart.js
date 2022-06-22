import Chart from 'chart.js/auto';

const ctx = document.querySelector('#revenueChart');
// ctx = document.querySelector('#revenueChart').getContext('2d');

const generateRevenueChart = (dataObj) => {
  const revenueChart = new Chart(ctx, {
    type: 'line',
    data: dataObj
  });
  return revenueChart;
};

export default generateRevenueChart;
