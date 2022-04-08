function gladiator(input) {
    let gladiatorItems = input.shift().split(' ');
 
    for (let command of input) {
        let currentCommand = command.split(' ');
 
        if(currentCommand[0] === "Buy") {
            gladiatorItems.push(currentCommand[1]);
        } else if (currentCommand[0] === "Trash") {
            let indexOfItemToTrash = gladiatorItems.indexOf(currentCommand[1]);
 
            gladiatorItems.splice(indexOfItemToTrash, 1);
        } else if (currentCommand[0] === "Repair") {
            if(gladiatorItems.includes(currentCommand[1])) {
                let indexOfItemToRepair = gladiatorItems.indexOf(currentCommand[1]);
 
                gladiatorItems.splice(indexOfItemToRepair, 1);
                gladiatorItems.push(currentCommand[1]);
            }
        } else if (currentCommand[0] === "Upgrade") {
            let item = currentCommand[1].split('-');
            let upgraded = item.join(':');
 
            if (gladiatorItems.includes(item[0])) {
                let indexOfItemToUpgrade = gladiatorItems.indexOf(item[0]);
 
                gladiatorItems.splice(indexOfItemToUpgrade + 1, 0, upgraded);
            }
        }
    }
 
    console.log(gladiatorItems.join(' '));
};