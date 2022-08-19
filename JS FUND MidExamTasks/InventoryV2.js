function inventory(inputArr) {

    let journalArr = inputArr.shift().split(', ');
    // (["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
    // console.log(journalArr) -> ["Iron, Wood, Sword"];
  
    let currentCommandLine = inputArr.shift();
    while ( currentCommandLine !== "Craft!"){
        
      let tokens = currentCommandLine.split(' - ');
      let command = tokens[0];
      let param1 = tokens[1];

      if(command === 'Collect'){
        if (journalArr.includes(param1) === false){
          journalArr.push(param1);
        } 
      }

      if( command === 'Drop'){
        if (journalArr.includes(param1) === true){
         let indexItem = journalArr.indexOf(param1);
         journalArr.splice(indexItem,1);
        }
      }

      if (command === 'Combine Items' ){
        // "Combine Items - Sword:Bow",
         let param1Info = param1.split(':');
         let oldItem = param1Info[0];
         let newItem = param1Info[1];

        //  console.log(`Old Item: ${oldItem} ; New Item: ${newItem}`);
         if ( journalArr.includes(oldItem) === true ){
          let indexOldItem = journalArr.indexOf(oldItem);
          journalArr.splice(indexOldItem+1,0, newItem);
         }
      }

      if (command === 'Renew') {
        if ( journalArr.includes(param1) === true){
          let indexOfItem = journalArr.indexOf(param1);
          journalArr.splice(indexOfItem,1);
          journalArr.push(param1);
        }
      }
      currentCommandLine = inputArr.shift();
    } 

      console.log(`${journalArr.join(', ')}`); 
}




inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);


inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
