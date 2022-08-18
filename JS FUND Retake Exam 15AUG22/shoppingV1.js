function shopping(inputArr) {
  
  let commandLineInfo = inputArr.shift();
  let result = {};
  while (commandLineInfo !== "Go Shopping") {
    // "Add->Grocery->Dried-fruit,Nuts,Lemons",
    let tokens = commandLineInfo.split("->");
    let currentcommand = tokens[0];
    let nameOfStore = tokens[1];
    let param2 = tokens[2];
    let importantItemsArr = [];

    if (currentcommand === "Add") {
      // трябва да направя цикъл с проверка и да добавя продукта в магазина само ако го няма в целия списък!!!
      let currentItemList = param2.split(",");
      if (result.hasOwnProperty(nameOfStore) === false) {
        result[nameOfStore] = [];
        for (let el of currentItemList) {
          result[nameOfStore].push(el);
        }
      }
      if (result.hasOwnProperty(nameOfStore) === true) {
        let currentProductList = param2.split(",");
        for (let el of currentProductList) {
          if (result[nameOfStore].includes(el) == false) {
            result[nameOfStore].push(el);
          } else if (result[nameOfStore].includes(el) == true) {
         
          }
        }
      }
    }
    if (currentcommand == "Important") {
      //  "Important->Groceries->Batteries",
      let importantItem = param2;
      importantItemsArr.push(importantItem);
      if (result.hasOwnProperty(nameOfStore) == true) {
        if (result[nameOfStore].includes(importantItem) == false) {
          result[nameOfStore].push(importantItem);
        }
      } else if (result.hasOwnProperty(nameOfStore) == false) {
        result[nameOfStore] = [];
        result[nameOfStore].push(importantItem);
      }
    }

    if (currentcommand == "Remove") {
      // "Remove->Market",
      if (result.hasOwnProperty(nameOfStore) == true) {
        for (let importantEl of importantItemsArr) {
          if (result[nameOfStore].includes(importantEl) == false) {
            delete result[nameOfStore];
          } else if (result[nameOfStore].includes(importantEl) == true) {
          
          }
        }
      } else {
     
      }
    }

    commandLineInfo = inputArr.shift();
  }

  for (let store in result) {
    console.log(`${store}:`);
    for (let item of result[store]) {
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

console.log(`******`);

shopping([
  "Add->Peak->Batteries,Umbrella",
  "Add->Groceries->Water,Juice,Food",
  "Add->Peak->Tent",
  "Important->Groceries->Batteries",
  "Remove->Store",
  "Go Shopping",
]);
