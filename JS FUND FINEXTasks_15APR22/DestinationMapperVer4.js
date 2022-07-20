function DestinationMapper (inputString){

    
let text = inputString;
// console.log(text);
let pattern = /(=|\/)(?<location>[A-Z][a-zA-z]{2,})\1/g;
let locationsArr = [];
let points = 0;
let arrOfMatches = text.match(pattern);
// console.log(arrOfMatches);

if ( arrOfMatches != null  ){
   for ( let location of arrOfMatches ){
       let currentLocation = location.slice(1, location.length-1 );
       locationsArr.push(currentLocation);
       let currentPoints = +currentLocation.length;
       points += currentPoints;
   }

   console.log(`Destinations: ${locationsArr.join(", ")}`);
   console.log(`Travel Points: ${points}`);
  
} else {
 console.log(`Destinations: `);
 console.log(`Travel Points: 0`);
}






}

DestinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

console.log(`**********`);

DestinationMapper ("ThisIs some InvalidInput"); 


// (=|\/)(?<locations>[A-Z][a-zA-z]+)\1 

// (=|\/)([A-Z][a-zA-z]+)\1 

// (=|\/)([A-Z][a-zA-z]{2,})\1

// (=|\/)(?<location>[A-Z][a-zA-z]{2,})\1 