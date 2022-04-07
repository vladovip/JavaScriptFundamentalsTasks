function plantDiscovery(input) {
    let num = Number(input.shift());
    let plantBook = {};
    for (let i = 0; i < num; i++) {
        let [plant, rarity] = input.shift().split('<->');
        if (plantBook.hasOwnProperty(plant) == false) {
            plantBook[plant] = {};
        }
        plantBook[plant]['Rarity'] = rarity;
    }
    while (input[0] !== 'Exhibition') {
        let data = input.shift();
        if (data.includes('Rate')) {
            let info = data.split('Rate: ')[1];
            let [plant, rate] = info.split(' - ');
            if (plantBook.hasOwnProperty(plant) == false) {
                console.log('error');
            } else {
                if (plantBook[plant].hasOwnProperty('Rating') == false) {
                    plantBook[plant]['Rating'] = [];
                }
                plantBook[plant]['Rating'].push(rate);
            }
        } else if (data.includes('Update')) {
            let info = data.split('Update: ')[1];
            let [plant, rarity] = info.split(' - ');
            if (plantBook.hasOwnProperty(plant) == false) {
                console.log('error');
            } else {
                plantBook[plant]['Rarity'] = rarity;
            }
        } else if (data.includes('Reset')) {
            let plant = data.split('Reset: ')[1];
            if (plantBook.hasOwnProperty(plant) == false) {
                console.log('error');
            } else {
                plantBook[plant]['Rating'] = [];
            }
        }
    }
    let entries = Object.entries(plantBook);
    console.log('Plants for the exhibition:');
    for (let [key, value] of entries) {
        let plant = key;
        let otherEntries = Object.entries(value);
        let rarity = 0;
        let averageRating = 0;
        let totalRating = 0;
        for (let [key, value] of otherEntries) {
            if (key == 'Rarity') {
                rarity = Number(value);
            } else if (key == 'Rating') {
                if (value.length == 0) {
                    averageRating = 0;
                } else {
                    for (let num of value) {
                        totalRating += Number(num);
                    }
                    averageRating = totalRating / value.length;                    
                }
            }
        }
        console.log(`- ${plant}; Rarity: ${rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}