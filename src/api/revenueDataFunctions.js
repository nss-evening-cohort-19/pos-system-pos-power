const getTotalRevenue = (arr) => {
  console.warn(arr);
  arr.reduce((accumulator, object) => accumulator + object.totalAmount, 0);
};

const getTotalTips = (arr) => {
  arr.reduce((accumulator, object) => accumulator + object.tipAmount, 0);
};

const revenueObj = (arr) => {
  console.warn(arr);
  console.warn(getTotalRevenue(arr));
  console.warn(getTotalTips(arr));
  const newRevenueObj = {
    tipAmount: getTotalRevenue(arr),
    totalAmount: getTotalTips(arr)
  };
  console.warn(newRevenueObj);
  return newRevenueObj;
};

export default revenueObj;
