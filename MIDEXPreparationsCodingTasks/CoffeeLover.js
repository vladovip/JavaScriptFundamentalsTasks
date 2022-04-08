function coffeLover(input){
    let coffeeNames = input.shift().split(" ");
    // console.log(coffeeNames);
    // ['Arabica', 'Liberica', 'Charrieriana', 'Magnistipula', 'Robusta', 'BulkCoffee', 'StrongCoffee']
    let numsCommand = Number(input.shift());

    for(let i = 0; i < numsCommand; i++){
        let tokens = input[i].split(" ");
        // console.log(tokens);
        let command = tokens[0];

        if (command == "Include") {
            let typeCoffee = tokens[1];
            coffeeNames.push(typeCoffee);
            // console.log(coffeeNames);
        } else if ( command == "Remove"){
            let coffeePosition = tokens[1];
            let numsCoffees = tokens[2];
            if (coffeePosition == "first") {
                coffeeNames.splice(0, numsCoffees);
            } else {
                coffeeNames.splice(-numsCoffees);
                // console.log(coffeeNames); // ['Charrieriana', 'Magnistipula', 'Robusta', 'BulkCoffee', 'StrongCoffee']
            }
            if (coffeeNames.length <= numsCoffees) {
                break;
            }
        } else if ( command == "Prefer"){
            let index1 = tokens[1];
            let index2 = tokens[2];
            if((index1 >= 0 && index1 <= coffeeNames.length) && (index2 >= 0 && index2 <= coffeeNames.length)){
                let tempIndex = coffeeNames[index1];
                coffeeNames[index1] = coffeeNames[index2];
                coffeeNames[index2] = tempIndex;
            } else {
                break;
            }
        } else if ( command == "Reverse"){
            coffeeNames = coffeeNames.reverse();
        }
    }
    console.log(Coffees:\n${coffeeNames.join(" ")});
    // console.log(coffeeNames);
}