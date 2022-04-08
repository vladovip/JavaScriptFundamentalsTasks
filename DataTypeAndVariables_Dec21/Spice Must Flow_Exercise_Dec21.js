
    function solve(startingYield) {

        let currentSpice = startingYield;
        let totalAmountOfSpice = 0;
        let dayCounter = 0;
    
            for (let i = currentSpice; i >= 100; i -= 10) {
                totalAmountOfSpice += (i - 26);
                dayCounter++;
            }
        
        totalAmountOfSpice -= 26 ;
        
        console.log(dayCounter);
        console.log(Math.max(totalAmountOfSpice, 0));
    }


    solve(111);

/* Write a program that calculates the total amount of spice that can be extracted from a source.
Print on the console on two separate lines how many days the mine has operated 
and the total amount of spice extracted.
*/ 