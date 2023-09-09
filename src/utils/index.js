const getShortAddress = address => {
  const addressArr = address.split(',');
  const [, city, country] = addressArr;
  return { city, country };
};

const numberWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { getShortAddress, numberWithCommas };
