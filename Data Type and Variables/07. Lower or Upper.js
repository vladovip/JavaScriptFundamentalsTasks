function solve(character) {

   let value= character.charCodeAt(0); 
 
   if ( value >= 65 && value <= 90 ){
      console.log('upper-case')
  } else if ( value >= 97 && value <= 122){
  console.log("lower-case");
  }


  // console.log(character === character.toLowerCase()? "lower-case" : "upper-case" );

}
solve ('D');


  