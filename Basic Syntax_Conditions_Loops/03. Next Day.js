function solve(year, month, day) {
    let thisDay = new Date(year, month -= 1, day += 1);
 
    let newYear = thisDay.getFullYear();
    let newMonth = thisDay.getMonth();
    let newDate = thisDay.getDate();
 
    console.log(`${newYear}-${newMonth + 1}-${newDate}`);
}
 
solve(2021, 1, 28);