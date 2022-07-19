let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  dataByHour:[],

  getNumCust: numCustPerHour,
};

let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  dataByHour: [],

  getNumCust: numCustPerHour,
};

let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 3.7,
  dataByHour: [],

  getNumCust: numCustPerHour,
};

let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  dataByHour: [],

  getNumCust: numCustPerHour,
};

let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  dataByHour: [],

  getNumCust: numCustPerHour,
};

// Min-Max inclusive random number generator from MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function numCustPerHour(){
  return getRandomIntInclusive (this.minCust, this.maxCust);
}

