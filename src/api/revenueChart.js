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

const getArrayProp = (arr, property) => {
  const newArr = [];
  arr.forEach((object) => {
    newArr.push(object[property]);
  });
  return newArr;
};

const generateRevenueChart = (dataObj) => {
  const ctx = document.querySelector('#revenueChart').getContext('2d');
  const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(0, 0, 0)',
        label: 'Generated Revenue',
        data: getArrayProp((filterDataObj(dataObj)), 'y'),
        tension: 0.1
      }],
      labels: getArrayProp((filterDataObj(dataObj)), 'x'),
    },
  });
  return revenueChart;
};

export default generateRevenueChart;
