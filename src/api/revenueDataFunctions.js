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

const getOrderTypeTotal = (arr, typeOfOrder) => {
  const filteredArr = arr.filter((order) => order.orderType === typeOfOrder);
  return filteredArr.length;
};

const getPaymentTypeTotal = (arr, typeOfOrder) => {
  const filteredArr = arr.filter((order) => order.paymentType === typeOfOrder);
  return filteredArr.length;
};

const revenueObj = (arr) => {
  const newRevenueObj = {
    totalAmount: getTotalRevenue(arr),
    tipAmount: getTotalTips(arr),
    walkInOrders: getOrderTypeTotal(arr, 'walk-in'),
    callInOrders: getOrderTypeTotal(arr, 'call-in'),
    cardOrders: getPaymentTypeTotal(arr, 'card'),
    cashOrders: getPaymentTypeTotal(arr, 'cash'),
    mobileOrders: getPaymentTypeTotal(arr, 'mobile'),
  };
  console.warn(newRevenueObj);
  return newRevenueObj;
};

export default revenueObj;
