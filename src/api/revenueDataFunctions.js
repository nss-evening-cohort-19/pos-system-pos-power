const getTotalRevenue = (arr) => {
  let sum = 0;
  arr.forEach((revObj) => {
    sum += revObj.totalAmount;
  });
  return sum;
};

const getTotalTips = (arr) => {
  let sum = 0;
  arr.forEach((revObj) => {
    sum += revObj.tipAmount;
  });
  return sum;
};

const revenueObj = (arr) => {
  const newRevenueObj = {
    totalAmount: getTotalRevenue(arr),
    tipAmount: getTotalTips(arr)
  };
  console.warn(newRevenueObj);
  return newRevenueObj;
};

export default revenueObj;
