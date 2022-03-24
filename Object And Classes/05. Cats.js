function solve(input) {

    let cats = [];
    
    for ( let i= 0; i < input.length; i++){
        let catData = input[i].split(' ');
        let name, age;
        [name,age] = [catData[0], catData[1]];
        cats.push(new cats(name,age));
    }

    class cats {

        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.sound = function makeSound() {
                console.log('Meow');
            }
        }
    }

    
    let output = '';
    for ( let cat of cats){
        output += `${cat} says ${makeSound}`;
    }
     console.log(output);






}
solve(['Mellow 2', 'Tom 5']);



/*Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input.
It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided you must create a cat object. */

/* class Student {
    constructor(name, grade) {
      this.name = name;
      this.grade = grade;
    }
  }*/

  