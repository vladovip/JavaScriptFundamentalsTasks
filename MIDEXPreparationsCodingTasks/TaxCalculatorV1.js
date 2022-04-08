function taxCollectorRevenueAgency ( stringArrVehicles ){

   
    let carTaxes = 0;
    let carsArrLine = stringArrVehicles[0].split('>>');
    // console.log(carsArrLine);
    let collectedTaxes = 0;

    
    for (let index = 0; index < carsArrLine.length; index++) {
        let tokens = carsArrLine[index].split(" ");
        //console.log(tokens);
        let cartype = tokens[0];
       // console.log(cartype);
        let yearsInUseOfCar = Number(tokens[1]);
        //console.log(yearsInUseOfCar);
        let kmtravelled = Number(tokens[2]);
       // console.log(kmtravelled);
        
    
        if (cartype == "family"){
            let num = Math.trunc( kmtravelled / 3000);
            carTaxes = (num * 12) + (50 - (yearsInUseOfCar * 5));
            collectedTaxes += carTaxes;
            console.log(`A ${cartype} car will pay ${carTaxes.toFixed(2)} euros in taxes.`);
        } else if ( cartype == "heavyDuty" ) {
            let num = Math.trunc(kmtravelled / 9000);
            carTaxes = num * 14 + (80 - (yearsInUseOfCar * 8));
            collectedTaxes += carTaxes;
            console.log(`A ${cartype} car will pay ${carTaxes.toFixed(2)} euros in taxes.`);
        }  else if ( cartype == "sports"){
            let num = Math.trunc(kmtravelled / 2000);
            carTaxes = num * 18 + (100 - (yearsInUseOfCar * 9));
            collectedTaxes += carTaxes;
           console.log(`A ${cartype} car will pay ${carTaxes.toFixed(2)} euros in taxes.`);
        } else {
            console.log("Invalid car type.");
        } 
          
    }
     console.log(`The National Revenue Agency will collect ${collectedTaxes.toFixed(2)} euros in taxes.`);     
}
   

taxCollectorRevenueAgency((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]));
