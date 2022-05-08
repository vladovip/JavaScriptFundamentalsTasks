function encryptedPassword ( input ){
   
  let numCounter = Number(input.shift());
  let patterPassRegExp = /(.+)>(?<numbers>\d{3})(?:\|)(?<loweCase>[a-z]{3})(?:\|)(?<UpperCase>[A-Z]{3})(?:\|)(?<symbols>[^<>]{3})<\1/gm;
  // console.log(numCounter);
  let currentCount= 0;
  
  while ( currentCount < numCounter ){
       passwordLine = input.shift();
       let allMatches =  patterPassRegExp.exec(passwordLine);

       if( allMatches !== null){
          console.log(`Password: ${allMatches.groups['numbers']}${allMatches.groups['loweCase']}${allMatches.groups['UpperCase']}${allMatches.groups['symbols']}`);    
       } else {
          console.log(`Try another password!`);
       }
   
      currentCount++;
  }
 

}

encryptedPassword ([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);


console.log(`------------`);

encryptedPassword ([
  "5",
  "aa>111|mqu|BAU|mqu<aa",
  "()>111!aaa!AAA!^&<()",
  "o>088|abc|AAA|***<o",
  "asd>asd|asd|ASD|asd<asd",
  ">088|zzzz|ZzZ|123<",
]);








// (\W+)([^<>,\s]+)(\d{3})(?:\|)([a-z]{3})(?:\|)([A-Z]{3})(?:\|)(\W+)([^<>,\s]+)\1    - 6th option

// (\W+)\>(\d{3})(?:\|)([a-z]{3})(?:\|)([A-Z]{3})(?:\|)([^><\s]{3})\<\1  - 7th option 

// (.+)\>(\d{3})(?:\|)([a-z]{3})(?:\|)([A-Z]{3})(?:\|)([^><\s]{3})\<\1 

//  (.+)>(?<numbers>\d{3})(?:\|)(?<loweCase>[a-z]{3})(?:\|)(?<UpperCase>[A-Z]{3})(?:\|)(?<symbols>[^<>]{3})<\1  -> final

// ([\W\w]+)>(?<numbers>\d{3})(?:\|)(?<loweCase>[a-z]{3})(?:\|)(?<UpperCase>[A-Z]{3})(?:\|)(?<symbols>[^<>\s]{3})<\1