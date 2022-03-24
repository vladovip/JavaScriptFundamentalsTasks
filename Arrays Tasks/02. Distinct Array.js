function solution(input) {

    let outputArr = [];

    for (let element of input) {

        if (!outputArr.includes(element)) {
            outputArr.push(element);

        }

    }
    console.log(outputArr.join(' '));

}
solution([7, 8, 9, 7, 2, 3, 4, 1, 2]);
