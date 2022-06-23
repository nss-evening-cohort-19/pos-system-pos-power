import Chart from 'chart.js/auto';

const filterDataObj = (dataObj) => {
  const newArr = [];
  dataObj.forEach((revenueObject) => {
    const newObj = {
      y: Number(revenueObject.totalAmount).toFixed(2),
      x: revenueObject.date
    };
    newArr.push(newObj);
  });
  return newArr;
};

const generateRevenueChart = (dataObj) => {
  const ctx = document.querySelector('#revenueChart').getContext('2d');
  console.warn(filterDataObj(dataObj));
  const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        backgroundColor: 'rgb(255, 99, 132)',
        data: [Object.values(filterDataObj(dataObj))]
      }],
      labels: Object.keys(filterDataObj(dataObj))
    },
  });
  console.warn(revenueChart);
  return revenueChart;
};

export default generateRevenueChart;
