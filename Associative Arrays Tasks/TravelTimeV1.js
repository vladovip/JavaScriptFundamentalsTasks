function travelTime(arr) {
    
    let travelList = {};
    for (let data of arr) {
        let [country, town, cost] = data.split(' > ');
        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = new Map();
        }
        if (travelList[country].has(town)) {
            let oldCost = travelList[country].get(town);
            if (oldCost > cost) {
                travelList[country].set(town, cost);
            }
        } else {
            travelList[country].set(town, cost);
        }
    }
    let sortedObj = Object.entries(travelList);
    sortedObj.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, map] of sortedObj) {
        let result = '';
        result += `${key} -> `;
        let sortedMap = Array.from(map.entries());
        sortedMap.sort((a, b) => a[1] - b[1]);
        for (let [key, value] of sortedMap) {
            result += `${key} -> ${value} `;
        }
        console.log(result);
    }
}