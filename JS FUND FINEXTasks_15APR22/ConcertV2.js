function solve(input) {
    let concert = {};
    for (let line of input) {
        let [command, band, params] = line.split('; ');
 
        if (command == 'Start!') {
            break;
        }
        if (command === 'Play') {
            if (!concert.hasOwnProperty(band)) {
                concert[band] = {
                    time: 0,
                    members: []
                }
                concert[band].time += Number(params)
            } else {
                concert[band].time += Number(params)
            }
        } else {
            let membersToAdd = params.split(', ')
            if (!concert.hasOwnProperty(band)) {
                concert[band] = {
                    time: 0,
                    members: []
                }
                for (const member of membersToAdd) {
                    concert[band].members.push(member)
                }
            } else {
                for (const member of membersToAdd) {
                    if (!concert[band].members.includes(member)) {
                        concert[band].members.push(member)
                    }
                }
            }
        }
    }
    let totalSum = 0
    for (let band in concert) {
        totalSum += concert[band].time
    }
    console.log(`Total time: ${totalSum}`);
 
    for (let band in concert) {
        console.log(`${band} -> ${concert[band].time}`);
    }
 
    let firstBand = Object.entries(concert)[0]
 
    console.log(firstBand[0]);
    for (let name of firstBand[1].members) {
        console.log(`=> ${name}`);
    }
}


solve([
    "Play; The Beatles; 2584",
    "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
    "Add; The Beatles; Paul McCartney, George Harrison",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
    "Play; The Rolling Stones; 4239",
    "Start!",
  ]);
  
  console.log(`------------`);
  
  solve([
    "Add; The Beatles; John Lennon, Paul McCartney",
    "Add; The Beatles; Paul McCartney, George Harrison",
    "Add; The Beatles; George Harrison, Ringo Starr",
    "Play; The Beatles; 3698",
    "Play; The Beatles; 3828",
    "Start!",
  ]);
  
  console.log(`------------`);
  
  solve([
    "Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
    "Play; The Beatles; 4569",
    "Play; The Beatles; 2456",
    "Play; Queen; 1250",
    "Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
    "Play; Queen; 6215",
    "Start!",
  ]);