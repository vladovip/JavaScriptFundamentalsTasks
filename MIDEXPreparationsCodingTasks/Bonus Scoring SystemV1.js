function bonusSystem(inputArr) {
  let numberOfStudents = Number(inputArr.shift());
  let numberOfLectures = Number(inputArr.shift());
  let additionalBonus = Number(inputArr.shift());
  let arrOfAttendance = inputArr;
  // ["12", "19", "24", "16", "20"]
  // console.log(arrOfAttendance);

  let bonusPointsArr = [];

  for (let index = 0; index < numberOfStudents; index++) {
    let eachStudentAttendance = Number(arrOfAttendance[index]);
    let bonusOfEachStudent = Math.round((eachStudentAttendance / numberOfLectures) * (5 + additionalBonus));
    bonusPointsArr.push(bonusOfEachStudent);
  }
  // console.log(bonusPointsArr);
  // (5) [17, 27, 34, 22, 28]
  let tempMaxNum = 0;
  for (let index = 0; index < bonusPointsArr.length; index++) {
        if(  bonusPointsArr[index] >= tempMaxNum){
          tempMaxNum = bonusPointsArr[index];
        }  
  }
  let indexOfStudentMaxBonusPoints = bonusPointsArr.indexOf(tempMaxNum);
  
  console.log(`Max Bonus: ${tempMaxNum}.`);
  console.log(`The student has attended ${arrOfAttendance[indexOfStudentMaxBonusPoints]} lectures.`);
 

}




bonusSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);

console.log(`**************`);

bonusSystem([
  "10",
  "30",
  "14",
  "8",
  "23",
  "27",
  "28",
  "15",
  "17",
  "25",
  "26",
  "5",
  "18",
]);
