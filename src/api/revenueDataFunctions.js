const getTotalRevenue = (arr) => {
  let sum = 0;
  arr.forEach((revObj) => {
    sum += revObj.totalAmount;
  });
  return Number(sum);
};

const getTotalTips = (arr) => {
  let sum = 0;
  arr.forEach((revObj) => {
    sum += revObj.tipAmount;
  });
  return Number(sum);
};

const getOrderTypeTotal = (arr, typeOfOrder) => {
  const filteredArr = arr.filter((order) => order.orderType === typeOfOrder);
  return filteredArr.length;
};

const getPaymentTypeTotal = (arr, typeOfOrder) => {
  const filteredArr = arr.filter((order) => order.paymentType === typeOfOrder);
  return filteredArr.length;
};

const getDateRange = (arr, dateDesired) => {
  let date = null;
  let finalDate = null;
  const sortedArr = arr.sort((a, b) => {
    const da = new Date(a.date);
    const db = new Date(b.date);
    return da - db;
  });
  if (dateDesired === 'oldest') {
    date = new Date(sortedArr[0].date);
    finalDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  } else if (dateDesired === 'newest') {
    date = new Date(sortedArr[arr.length - 1].date);
    finalDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  }
  return finalDate;
};

const revenueObj = (arr) => {
  const newRevenueObj = {
    earlyDate: getDateRange(arr, 'oldest'),
    lateDate: getDateRange(arr, 'newest'),
    totalAmount: getTotalRevenue(arr),
    tipAmount: getTotalTips(arr),
    walkInOrders: getOrderTypeTotal(arr, 'walk-in'),
    callInOrders: getOrderTypeTotal(arr, 'call-in'),
    cardOrders: getPaymentTypeTotal(arr, 'credit'),
    cashOrders: getPaymentTypeTotal(arr, 'cash'),
    mobileOrders: getPaymentTypeTotal(arr, 'mobile'),
    checkOrders: getPaymentTypeTotal(arr, 'check'),
  };
  return newRevenueObj;
};

const customRevenueObj = (arr, startDate, endDate) => {
  const filteredArr = arr.filter((order) => new Date(order.date) >= new Date(startDate) && new Date(order.date) < new Date(endDate));
  const newRevenueObj = {
    earlyDate: startDate,
    lateDate: endDate,
    totalAmount: getTotalRevenue(filteredArr),
    tipAmount: getTotalTips(filteredArr),
    walkInOrders: getOrderTypeTotal(filteredArr, 'walk-in'),
    callInOrders: getOrderTypeTotal(filteredArr, 'call-in'),
    cardOrders: getPaymentTypeTotal(filteredArr, 'credit'),
    cashOrders: getPaymentTypeTotal(filteredArr, 'cash'),
    mobileOrders: getPaymentTypeTotal(filteredArr, 'mobile'),
    checkOrders: getPaymentTypeTotal(filteredArr, 'check'),
  };
  return newRevenueObj;
};

export { revenueObj, customRevenueObj };
