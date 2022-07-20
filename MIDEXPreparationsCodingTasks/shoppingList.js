function shoppingList (inputArr) {

 
    let itmesList = inputArr.shift().split('!');
    // console.log(itmesList);
    let commandLine = inputArr.shift();
    while( commandLine != 'Go Shopping!' ){
       let tokens = commandLine.split(' ');
       let command = tokens[0];
       let param1 = tokens[1];
       let param2 = tokens[2];

       // "Unnecessary Grapes",
       // "Correct Pepper Onion",

       if ( command == 'Urgent'){
        let item = param1;
        if (itmesList.includes(item) == false ){
            itmesList.unshift(item);
        }
       }
       if ( command ==  'Unnecessary'){
           let item = param1;
           if ( itmesList.includes(item)  == true ){
             let indexOfItem = itmesList.indexOf(item);
             itmesList.splice(indexOfItem, 1);
           }
       }
       if ( command == 'Correct'){
            let oldItem = param1;
            let newItem = param2;
            if( itmesList.includes(oldItem) == true){
            let indexOfOldItem = itmesList.indexOf(oldItem);
            itmesList.splice(indexOfOldItem, 1 , newItem  );
            }
       }
       if ( command == 'Rearrange'){
            let item = param1;
            if ( itmesList.includes(item) == true ){
                let indexOfItem = itmesList.indexOf(item);
                itmesList.splice(indexOfItem,1);
                itmesList.push(item);
            }

       }
       commandLine = inputArr.shift();
    }
    console.log(`${itmesList.join(', ')}`);

}

shoppingList (["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
 


console.log(`***************`);


shoppingList (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

