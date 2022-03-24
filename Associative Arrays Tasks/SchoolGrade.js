function schoolGrade(input) {
  let result = new Map();

  for (let lines of input) {
    let tokens = lines.split(" ");
    let name = tokens.shift();
    let gradesArr = tokens.map(Number);

    if (result.has(name) == false) {
      result.set(name, []);
    }

    let existing = result.get(name);
    for (let grade of gradesArr) {
      existing.push(grade);
    }
  }

  let sorted = Array.from(result);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, existing] of sorted) {
    let average = 0;
    for (let grade of existing) {
      average += grade;
    }
    average /= existing.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}

schoolGrade([
"Lilly 4 6 6 5",
 "Tim 5 6", 
 "Tammy 2 4 3", 
 "Tim 6 6"]);

console.log("------");

schoolGrade([
    "Steven 3 5 6 4", 
    "George 4 6", 
    "Tammy 2 5 3",
     "Steven 6 3"]);
