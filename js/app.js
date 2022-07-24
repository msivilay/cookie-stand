'use strict';
//console.log('Hello, world!');
// Min-Max inclusive random number generator from MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

function Store(location, minCust, maxCust, avgCookiePerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.dataByHour = [];
}
//console.log(`Min Cust: ${this.minCust}`);
Store.prototype = {
  getNumCust: function() {
    return getRandomIntInclusive (this.minCust, this.maxCust);
  },

  generateSalesData: function() {
    for (let j = 0; j < 24; j++) {
      let cookiesSold;
      if (j >= 6 && j < 20) {
        cookiesSold = Math.round(this.getNumCust() * this.avgCookiePerCust);
      } else {
        cookiesSold = 0;
      }

      let hourFormatted;
      if (j < 10) {
        hourFormatted = `0${j}:00`;
      } else {
        hourFormatted = `${j}:00`;
      }

      this.dataByHour.push({ numCookiesSold: cookiesSold, hour: hourFormatted });
    }
  },

  render: function(tbody) {
    let tr = document.createElement('tr');

    let header = document.createElement('th');
    header.textContent = this.location;
    tr.appendChild(header);

    let total = 0;

    for (let j=6; j < 20; j++){
      let td = document.createElement ('td');
      td.textContent = this.dataByHour[j].numCookiesSold;
      tr.appendChild(td);
      total += this.dataByHour[j].numCookiesSold;

    }
    let td = document.createElement('td');
    td.textContent = total;
    tr.appendChild(td);
    tbody.appendChild(tr);
  },
};

function salesDataHeaderRow(thead) {
  let tr = document.createElement('tr');

  let th = document.createElement('th');
  th.textContent = 'Location';
  tr.appendChild(th);

  for (let i = 6; i < 20; i++) {
    th = document.createElement('th');
    th.textContent = stores[0].dataByHour[i].hour;
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Total';
  tr.appendChild(th);

  thead.appendChild(tr);
}

function salesDataFooterRow(tfoot) {
  let tr = document.createElement('tr');

  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);

  let grandTotal = 0;
  for (let i = 6; i < 20; i++) {
    let hourTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      hourTotal += stores[j].dataByHour[i].numCookiesSold;
    }
    th = document.createElement('th');
    th.textContent = hourTotal;
    tr.appendChild(th);
    grandTotal += hourTotal;
  }

  th = document.createElement('th');
  th.textContent = grandTotal;
  tr.appendChild(th);

  tfoot.appendChild(tr);
}

function salesData(){
  let art = document.getElementById('stores');

  let table = document.createElement('table');

  let thead = document.createElement('thead');
  salesDataHeaderRow(thead);
  table.appendChild(thead);

  let tbody = document.createElement('tbody');
  for (let i=0; i < stores.length; i++){
    stores[i].render(tbody);
  }
  table.appendChild(tbody);

  let tfoot = document.createElement('tfoot');
  salesDataFooterRow(tfoot);
  table.appendChild(tfoot);

  art.appendChild(table);
}

let stores = [
  new Store('Seattle', 23, 65, 6.3),
  new Store('Tokyo', 3, 24, 1.2),
  new Store('Dubai', 11, 38, 3.7),
  new Store('Paris', 20, 38, 2.3),
  new Store('Lima', 2, 16, 4.6),
];

for (let i = 0; i < stores.length; i++) {

  stores[i].generateSalesData();
}

salesData();
