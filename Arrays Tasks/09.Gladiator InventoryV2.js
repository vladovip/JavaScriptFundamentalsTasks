function gladiatorInventory(array) {
 
    let peterInventory = array.shift().split(" ");
    //console.log(peterInventory);
    //console.log(array);
   
    for (let commandLine of array) {
        let tokens = commandLine.split(" ");
       //console.log(tokens);
        let currentCommand = tokens[0];
       // console.log(currentCommand);
        let currentItem = tokens[1];
        // console.log(currentItem);
        
        switch (currentCommand){
            case "Buy":  buy (currentItem);
            break;
            case "Trash": trash (currentItem);
            break;
            case "Repair": repair (currentItem);
            break;
            case "Upgrade": upgrade (currentItem);
            break;
    
        }      
  }
      function buy (equipment){
          if (!peterInventory.includes(equipment)){
            peterInventory.push(equipment);
          }
          return peterInventory;
      }

      function trash (equipment){
          for (let index = 0; index < peterInventory.length; index++) {
             if(equipment == peterInventory[index]){
                 peterInventory.splice(index,1);
             } 
          }
          return peterInventory;
      }

      function repair (equipment){
          for (let index = 0; index < peterInventory.length; index++) {
              if(equipment == peterInventory[index]){
               let repairedItem = peterInventory.splice(index,1);
               peterInventory.push(repairedItem);
              }
          }
          return peterInventory;
      }

      function upgrade (equipment){
          let upgradeLine = equipment.split("-");
          let upgradedItem = upgradeLine[0];
          let currentUpgrade = upgradeLine[1];
      for (let index = 0; index < peterInventory.length; index++) {
           if(upgradedItem == peterInventory[index]){
            let itemLineUpgrade = upgradedItem + ":" + currentUpgrade;
            peterInventory.splice(index+1, 0, itemLineUpgrade)
           }
      }
       return peterInventory;
    }

     console.log(peterInventory.join(' '));
    

}


gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
