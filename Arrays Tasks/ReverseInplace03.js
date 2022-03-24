function solve(arr) {

  let k = arr.length - 1;
  
  for (let i = 0; i < arr.length / 2; i++, k--) {
    let tempElement = arr[i];
    arr[i] = arr[k];
    arr[k] = tempElement;
  }

  console.log(arr.join(" "));
}

solve(["a", "b", "c", "d", "e"]);
