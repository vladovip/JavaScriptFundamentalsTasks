function solve(arr) {
    
  for (let i = 0; i < arr.length / 2; i++) {
    let k = arr.length - 1 - i;
    let tempElement = arr[i];
    arr[i] = arr[k];
    arr[k] = tempElement;
  }

  console.log(arr.join(" "));
}

solve(["a", "b", "c", "d", "e"]);
