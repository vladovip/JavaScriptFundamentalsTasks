function companyUsers(inputArr) {
 
  let companyResult = {}

  for (let lines of inputArr ){
  let [companyName, idEmployee] = lines.split(" -> ");
  //  console.log(companyName,idEmployee);
    if (companyResult.hasOwnProperty(companyName) == false){
          companyResult[companyName] = new Set();
    }
    companyResult[companyName].add(idEmployee);
  } 
  
  let  companyEntries = Object.entries(companyResult).sort();
   
   for ( let [companyName, idEmployee] of companyEntries){
     console.log(companyName);
     for ( let employee of idEmployee ){
       console.log(`-- ${employee}`);
     }
   }

}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);

console.log(`********`);

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
