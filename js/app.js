'use strict';

// Min-Max inclusive random number generator from MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //The maximum is inclusive and the minimum is inclusive
}

function Store(location, minCust, maxCust, avgCookiePerCust){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.dataByHour = [];
}


function numCustPerHour(){
  return getRandomIntInclusive (this.minCust, this.maxCust);
}

function salesData(){
  for (let i=0; i < stores.length; i++){
    let art = document.getElementById('stores');
    console.log(art);

    let list = document.createElement('ul');

    let header = document.createElement('h3');
    header.textContent = stores[i].location;
    art.appendChild(header);

    let total = 0;

    for (let j=6; j < 20; j++){
      let li = document.createElement ('li');
      li.textContent = `${stores[i].dataByHour[j].hour}: ${stores[i].dataByHour[j].numCookiesSold} cookies`;
      list.appendChild(li);
      total += stores[i].dataByHour[j].numCookiesSold;

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${total} cookies`;
    list.appendChild(li);
    art.appendChild(list);
  }
}

let stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  for (let j = 0; j < 24; j++) {
    let cookiesSold;
    if (j >= 6 && j < 20) {
      cookiesSold = Math.round(stores[i].getNumCust() * stores[i].avgCookiePerCust);
    } else {
      cookiesSold = 0;
    }

    let hourFormatted;
    if (j < 10) {
      hourFormatted = `0${j}:00`;
    } else {
      hourFormatted = `${j}:00`;
    }

    stores[i].dataByHour.push({numCookiesSold: cookiesSold, hour: hourFormatted});
  }
}

salesData();
