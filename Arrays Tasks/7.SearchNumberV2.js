function searchNumber(array1, array2) {
  let takenNumbers = array2[0];
  let deletedNumbers = array2[1];
  let searchedNumber = array2[2];

  let myNewArray = array1.splice(0, takenNumbers);
  myNewArray = myNewArray.splice(deletedNumbers);
  //console.log(myNewArray);
  let counter = 0;
  for (let index = 0; index < myNewArray.length; index++) {
    if (myNewArray[index] === searchedNumber) {
      counter++;
    }
  }
  console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
