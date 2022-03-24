// function solve(input) {
//      let listOfStaff = {};

//     for (let employee  of input) { 
//         listOfStaff.name = employee;
//         // console.log(listOfStaff);
//         listOfStaff.personalNumber = employee.length;
//         console.log(`Name: ${listOfStaff.name} -- Personal Number: ${listOfStaff.personalNumber}`);
// }




function solve(input) {
    let listOfStaff = [];

    class Employeess{
        constructor (name, length){
            this.name = name;
            this.length = length ;
        }
    }

   for (let employee  of input) { 
      
      let currentEmployee = new Employeess (employee, employee.length );
      listOfStaff.push(currentEmployee);
     
    //    console.log(`Name: ${listOfStaff.name} -- Personal Number: ${listOfStaff.personalNumber}`);
}








}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
