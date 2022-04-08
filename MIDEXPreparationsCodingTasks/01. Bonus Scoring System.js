function solve(input) {

    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());

   
    let studentsAttendance = input;
    let maxAttendance = 0;

    for (let i = 0; i < studentCount; i++) {
        
        let currentAttendance = Number(studentsAttendance[i]);
        if (currentAttendance > maxAttendance) {
            maxAttendance = currentAttendance;
        }
    }

    let maxBonus = 0;
    if (lecturesCount > 0 ){
     maxBonus = ( maxAttendance / lecturesCount) * (5 + initialBonus);
    
    }
    
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures. `);


}
solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);