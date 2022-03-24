function serializeString (input) {

    let listOfChars = {};
    let inputString = input[0];

    for (let index = 0; index < inputString.length; index++) {
         if (listOfChars.hasOwnProperty(inputString[index]) === false ){
             listOfChars[inputString [index]] = [];
         }
         listOfChars[inputString[index]].push(index);
    }
    
    let allEntries =  Object.entries(listOfChars);
    for (let  [key, value]  of allEntries) {
          console.log(`${key}:${value.join("/")}`);   
    }

}

serializeString (["abababa"]);
console.log(`************`);
serializeString (["avjavamsdmcalsdm"]); 