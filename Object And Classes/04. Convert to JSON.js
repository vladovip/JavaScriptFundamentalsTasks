function solve (name, lastName, hairColor){

 let personObject = {
    name : name,
    lastName : lastName,
    hairColor: hairColor,

 }

 // console.log(typeof personObject);
 
 let jasonFormat = JSON.stringify(personObject);
 console.log(jasonFormat);


} 
solve ('George',
'Jones',
'Brown'
);
