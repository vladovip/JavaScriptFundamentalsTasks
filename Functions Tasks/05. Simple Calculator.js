function solve(num1, num2, operator) {
    let operation = null ;

    switch (operator) {

        case 'multiply':
            operation = (num1, num2) => num1 * num2;
            break;
        case 'divide':
            operation = (num1, num2) => num1 / num2;
            break;
        case 'add':
            operation = (num1, num2) => num1 + num2;
            break;
        case 'subtract':
            operation = (num1, num2) => num1 - num2;
            break;
    }

    let result = operation(num1, num2);
    console.log(result);

}
solve(40, 8, 'divide');