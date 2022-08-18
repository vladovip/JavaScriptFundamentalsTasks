function shopping(inputArr) {
   //  Shopping Coding Challenge Solved. 

  let result = {};
  let currentLineInfo = inputArr.shift();
  let currenttotalItemList = [];
  let importantItemList = [];

  while (currentLineInfo != "Go Shopping") {
    // "Add->Grocery->Dried-fruit,Nuts,Lemons",
    let tokens = currentLineInfo.split("->");
    let command = tokens[0];
    let storeName = tokens[1];
    let param2 = tokens[2];

    if (command == "Add") { 
      let ItemListArr = param2.split(",");
      // console.log(ItemListArr);
      if (result.hasOwnProperty(storeName) == false) {
       result[storeName] = [];
       for ( let item of  ItemListArr){
            if(  result[storeName].includes(item) == false && currenttotalItemList.includes(item) == false){
                currenttotalItemList.push( item);
                result[storeName].push(item);
            }
       } 
      }
      if (result.hasOwnProperty(storeName) == true) {
        for ( let item of  ItemListArr){
          if(currenttotalItemList.includes(item) == false){
            result[storeName].push(item);
          }
        }
      }
    }

    if (command ==  "Important"){
      // o	"Important->{Store}->{Item}"
      // "Important->Market->Snack",
       if ( result.hasOwnProperty(storeName) == false){
          result[storeName] = [];
          if (currenttotalItemList.includes(param2) == false  &&  result[storeName].includes(param2) == false){
            result[storeName].unshift(param2);
            currenttotalItemList.push(param2);
            importantItemList.push(param2);
          }
       }

       if( result.hasOwnProperty(storeName) == true){
           if( result[storeName].includes(param2)== false && currenttotalItemList.includes(param2)== false){
            result[storeName].unshift(param2);
            currenttotalItemList.push(param2);
            importantItemList.push(param2);
           }
       }
    }

    if (command == "Remove"){
     // o	"Remove->{Store}" 
     // "Remove->Market",
      if (result.hasOwnProperty(storeName) ==  true){
        for ( let element of  importantItemList ){
            if ( result[storeName].includes(element)== false){
                 delete result[storeName];
            }
        } 
      }
    }


    currentLineInfo = inputArr.shift();
  }

  
  
  for ( let store in result){
    console.log(`${store}:`);
    for( let item of result[store]){
      console.log(`- ${item}`);
    }
  }



}

shopping([
  "Add->Grocery->Dried-fruit,Nuts,Lemons",
  "Add->Market->Nuts,Juice",
  "Important->Market->Snack",
  "Remove->Market",
  "Go Shopping",
]);

console.log(`*********`);

shopping([
  "Add->Peak->Batteries,Umbrella",
  "Add->Groceries->Water,Juice,Food",
  "Add->Peak->Tent",
  "Important->Groceries->Batteries",
  "Remove->Store",
  "Go Shopping",
]);

console.log("**********");

shopping (["Add->Peak->Batteries,Umbrella",
"Add->Groceries->Water,Juice,Food",
"Add->Peak->Water",
"Go Shopping"]);

