function smallestThreeNumbers(a, b, c) {
  
    let smallNum = function (a, b, c) {
    let smallestNumber = 0;
    if (a <= b && a <= c) {
      smallestNumber = a;
    } else if (b <= a && b <= c) {
      smallestNumber = b;
    } else {
      smallestNumber = c;
    }
    return smallestNumber;
  };
  console.log(smallNum(a, b, c));
}
smallestThreeNumbers(2, 5, 3);
smallestThreeNumbers(600, 342, 123);
