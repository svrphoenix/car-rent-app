const getShortAddress = address => {
  const addressArr = address.split(',');
  const [, city, country] = addressArr;
  return { city, country };
};

const numberWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const uniqBrands = (cars, brand) =>
  cars
    .flatMap(car => car[brand])
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort();

const getPrices = () => Array.apply(null, { length: 15 }).map((_, index) => index * 10 + 10);

export { getShortAddress, numberWithCommas, uniqBrands, getPrices };
