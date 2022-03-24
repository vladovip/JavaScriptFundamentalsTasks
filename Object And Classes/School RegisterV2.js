function schoolRegister(inputArr) {
  let listStudents = [];

  for (let lineOfStudent of inputArr) {
    let tokens = lineOfStudent.split(", ");
    let name = tokens[0].split(": ")[1];
    let grade = Number(tokens[1].split(": ")[1]);
    let score = Number(tokens[2].split(": ")[1]);
    // console.log(name,grade,score);
    if (score > 3) {
      let studentObj = {
        studName: name,
        studGrade: grade,
        studScore: score,
      };
      listStudents.push(studentObj);
    }
  }
  let sortedList = listStudents.sort((a, b) => a.studGrade - b.studGrade);

  for (let element of sortedList) {
    console.log(element);
  }
   let sameGradeStudents = [];
   let averageScoreSameGrade = 0;
   for (let index = 0; index < sortedList.length; index++) {
       //   TO DO ..... 
   }
    
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
