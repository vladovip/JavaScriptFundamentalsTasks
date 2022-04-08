function distinctArray(array) {
  //     let newArray = [];
  //     for( let number of array){
  //         if(!newArray.includes(number)){
  //             newArray.push(number);
  //         }
  //     }

  //     console.log(newArray.join(" "));
  //   }

  //   distinctArray([1, 2, 3, 4]);
  //   distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);


  // Second option for solution below:
  let newArr = [];
  array.map(currentElem => {
    if (!newArr.includes(currentElem)) {
      newArr.push(currentElem);
    }
  });
  console.log(newArr.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
