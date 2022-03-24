function travelTime(inputArr) {
  let countriesObj = {};
  for (let line of inputArr) {
    let [country, city, travelCost] = line.split(" > ");

    if (countriesObj.hasOwnProperty(country) == false) {
      countriesObj[country] = new Map();
    }
    if (countriesObj[country].has(city)) {
      let currentCost = countriesObj[country].get(city);
      if (currentCost > travelCost) {
        countriesObj[country].set(city, travelCost);
      }
      if (currentCost < travelCost) {
        countriesObj[country].set(city, currentCost);
      }
    } else {
      countriesObj[country].set(city, travelCost);
    }
  }
  let sortedCountriesObjArr = Object.entries(countriesObj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  for (let [key, mapCollection] of sortedCountriesObjArr) {
    let resultStr = `${key} ->`
    let sortedMapEntries = Array.from(mapCollection.entries());
    sortedMapEntries.sort((a, b) => a[1] - b[1]);
    for (let [element, value] of sortedMapEntries) {
        resultStr += ` ${element} -> ${value}`;
    }
    console.log(resultStr);
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);


console.log(`***********`);


travelTime([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10'
  ]
  );
