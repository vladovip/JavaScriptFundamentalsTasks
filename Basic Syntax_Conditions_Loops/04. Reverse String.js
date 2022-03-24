function solve(text){

  var str = text;
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join(""); 
 
 console.log(joinArray);

}
solve ('123456789');