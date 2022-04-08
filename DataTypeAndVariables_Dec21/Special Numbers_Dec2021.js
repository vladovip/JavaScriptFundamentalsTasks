function solve(n) {

    let i = 1;

    while (i <= n) {

        let sumOfDigids = 0;
        let currentStrNumber = i.toString();

        for (let j = 0; j < currentStrNumber.length; j++) {
            sumOfDigids += Number(currentStrNumber[j]);
        }

        if (sumOfDigids === 5 || sumOfDigids === 7 || sumOfDigids === 11) {
            console.log(`${currentStrNumber} -> True`);
        } else {
            console.log(`${currentStrNumber} -> False`);
        }

        i++;
    }


}

solve(15);


/* Write a program to receive a number n and for all numbers in the range 1…n print the number
 and if it is special or not (True / False).
A number is special when its sum of digits is 5, 7 or 11.
*/