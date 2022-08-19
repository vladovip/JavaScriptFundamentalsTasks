function solve(first, second, third, studentQuestions) {


    let firstEmployee = first;
    let secondEmployee = second;
    let thirdEmployee = third;
    let studentCount = studentQuestions;

    totalStudentsForHour = firstEmployee + secondEmployee + thirdEmployee;
    totalWorkingHours = Math.ceil(studentCount / totalStudentsForHour);

    if ((totalWorkingHours >= 4) && (totalWorkingHours % 4 === 0)) {

        let restTime = totalWorkingHours / 4;

        totaltime = totalWorkingHours + restTime;

        console.log(`Time needed: ${totaltime}h.`)

    } else if (totalWorkingHours < 4) {

        console.log(`Time needed: ${totalWorkingHours}h.`)
    }



}

solve(
    
    3,
    2,
    5,
    40,

);
