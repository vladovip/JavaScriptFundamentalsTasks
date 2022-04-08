function sofUniReception(arrayOfEmployees) {
  
  
  let firstEmployee  = Number(arrayOfEmployees.shift());
  let secondEmployee = Number(arrayOfEmployees.shift());
  let thirdEmployee  = Number(arrayOfEmployees.shift());
  let studentsCount =  Number(arrayOfEmployees.pop());
  let totalStudentsServedPerHour = firstEmployee + secondEmployee + thirdEmployee;
  let hourCounter = 0;

  
  while(studentsCount>0 ){
       studentsCount = studentsCount- totalStudentsServedPerHour;
       hourCounter++;
       
       if (hourCounter % 4 === 0) {
        hourCounter++;
      }
  }
   console.log(`Time needed: ${hourCounter}h.`);
  
}
sofUniReception(["5", "6", "4", "20"]);
sofUniReception(['1','2','3','45']);

