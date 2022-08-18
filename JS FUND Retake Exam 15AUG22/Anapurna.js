
    function katmanduArrival(inputArr) {
        let peaklineInfo = inputArr.shift();

        while (peaklineInfo !== 'Last note') {
            let RegExp = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/;
            let result = peaklineInfo.match(RegExp);
            if (result) {
                let lengthCode = Number(result[2]);
                let geographicalHashCodes = result[3];
                if (lengthCode === geographicalHashCodes.length) {
                    let PeakName = result[1].replace(/[!@#$?]+/g, '');
                    console.log(`Coordinates found! ${PeakName} -> ${geographicalHashCodes}`);
                } else {
                    console.log('Nothing found!');
                }
            } else {
                console.log('Nothing found!');
            }
            peaklineInfo = inputArr.shift();
        }
    }








    katmanduArrival (["!@Ma?na?sl!u@=7<<tv58ycb4845",
"E!ve?rest=.6<<tuvz26",
"!K@2.,##$=4<<tvnd",
"!Shiha@pan@gma##9<<tgfgegu67",
"!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
"Last note"]);

console.log(`*****`);

katmanduArrival (["Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
"=9Cho?@#Oyu<<thvb7ydht",
"Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
"Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
"Last note"]);



// [!@#$?]+|(?<peak>[A-Za-z0-9]+)[!@#$?]+  