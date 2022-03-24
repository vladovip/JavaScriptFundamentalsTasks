function solve(start,end){

    let sum = 0;
    let numbers="";

    for (let number = start; number<= end; number++ ){
        numbers+=`${number} `;
        sum += number;
    }
      console.log(numbers);
      console.log(`Sum: ${sum}`);
}
solve(5, 10);