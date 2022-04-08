function solve(number) {

    for (let j = 0; j < number; j++) {
        let firstLetter = String.fromCharCode(j + 97);
       
        for (let k = 0; k < number; k++) {
            let secondLetter = String.fromCharCode(k+97);

            for ( let l = 0; l < number; l++){
                let thirdLetter = String.fromCharCode( l + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }


}
solve(3);


    //let result = String.fromCharCode(97,98,99);
    //console.log(result);
/*  

Write a program to receive a number n and print all triples of the first n small Latin letters,
 ordered alphabetically:

 */ 