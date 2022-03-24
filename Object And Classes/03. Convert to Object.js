function solve (input){

  let objectPerson = JSON.parse(input);

 for ( let key in objectPerson ){
        console.log( `${key}: ${ objectPerson[key]}`);
    }   

}
solve('{"name": "George", "age": 40, "town": "Sofia"}');



//Write a function that receives a string in JSON format and converts it to object.
//Loop through all the keys and print them with their values in format: "{key}: {value}"
