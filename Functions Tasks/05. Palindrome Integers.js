function solution(arr) {
    
    for ( let number of arr){
        console.log( number === reverseNumber(number));
    }


    function reverseNumber(number) {
        let reversedValue = '';
        while (number > 0) {
            let lastDigit = number % 10;
            reversedValue += lastDigit;
            number = parseInt((number / 10));
        }
        return Number(reversedValue);
    }


}
solution([123, 323, 421, 121]);