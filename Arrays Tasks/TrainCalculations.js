function  train (train ) {

    let passengerInWagons = train.shift().split(" ").map(Number);
     //  console.log(passengerInWagons);
    let maxCapacity = Number(train.shift());
    // console.log(maxCapacity);
    for ( let command of train){
        let curCommand = command.split(" ");
        if ( curCommand [0] === "Add"){
            passengerInWagons.push(Number(curCommand[1]))
        } else {
            for (let i = 0; i < passengerInWagons.length; i++) {
              if ((passengerInWagons[i] + Number(curCommand [0])) <= maxCapacity) {
                  passengerInWagons[i] += Number(curCommand [0]);
                  break;
              }
              
            }

        }
    }
    console.log(passengerInWagons.join(" "));
    
}

train (['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)