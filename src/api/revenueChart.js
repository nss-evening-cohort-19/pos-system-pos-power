/* eslint-disable array-callback-return */
import Chart from 'chart.js/auto';

const filterDataObj = (dataObj) => dataObj.map((revenueObject) => revenueObject.date);

const generateRevenueChart = (dataObj) => {
  console.warn(dataObj);
  filterDataObj(dataObj);
  console.warn(filterDataObj(dataObj));
  const canvas = document.querySelector('#revenueChart');
  const ctx = canvas.getContext('2d');
  const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [
        filterDataObj(dataObj)
      ]
    },
  });
  return revenueChart;
};

export default generateRevenueChart;
