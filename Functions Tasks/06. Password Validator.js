function solution(password) {

    let isDigit = (c) => c >= 48 && c <= 57;
    
    let v1 = !isAlphabetical(password);
    let v2 = !lengthCheck(password);
    let v3 = !isContainTwoDigits(password);

    if (!isAlphabetical(password)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!lengthCheck(password)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isContainTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
    }
    
    if (v1 && v2 && v3) {
        console.log("Password is valid");
    }

    function lengthCheck(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function isAlphabetical(pass) {


        let isLowerLetter = (c) => c >= 87 && c <= 122;
        let isUpperLetter = (c) => c >= 65 && c <= 90;
        let isOk = true;

        for (let char of pass) {
            let n = char.charCodeAt(0);

            if (!isDigit(n) && !isLowerLetter(n) && !isUpperLetter(n)) {
                isOk = false;
                break;
            }
        }
        return isOk;
    }

    function isContainTwoDigits(pass) {

        let counter = 0;
        let isOk = false;

        for (let char of pass) {
            let n = char.charCodeAt(0);
            if (isDigit(n)) {
                counter++;
            }
            if (counter === 2) {
                isOk = true;
                break;
            }
        }
        return isOk;
    }


}
solution('MyPass123');
