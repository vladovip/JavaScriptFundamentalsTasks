function solve(text){

    var str = text;
    var emptyStr = '';

   for(let i = str.length; i>1; i--){
  emptyStr += str.slice(i-2,i)
  i--
}
console.log(emptyStr);
  
  }
  solve ('123456789');
