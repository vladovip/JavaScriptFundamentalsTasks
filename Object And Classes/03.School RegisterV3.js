function schoolRegister(inputArr) {

  let nextClassStudents = {};
  let totalStudentsGraduated = [];
  for (let lineStudent of inputArr) {
    let tokens = lineStudent.split(", ");
    //console.log(tokens);
    let studentName = tokens[0].split(": ")[1];
    // console.log(studentName);
    let currentGrade = tokens[1].split(": ")[1];
    let studentAverScore = tokens[2].split(": ")[1];

    if (studentAverScore > 3) {
      nextClassStudents = {
        name: studentName,
        grade: currentGrade,
        score: studentAverScore,
      };
      totalStudentsGraduated.push(nextClassStudents);
    }
  }

  let studentSorted = totalStudentsGraduated.sort((a, b) => a.grade - b.grade);
  let studentsWhoPass = [];

  for (let elements of studentSorted) {
    elements.grade = Number(elements.grade) + 1;
    studentsWhoPass.push(elements);
  }

  for (let elements of studentsWhoPass) {
    console.log(elements);
  }

  for (let i = 0; i < studentsWhoPass.length; i++) {
    let studentsWithEqualGrade = [];
    let averageScore = 0;
    
    // TO DO .... 
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
