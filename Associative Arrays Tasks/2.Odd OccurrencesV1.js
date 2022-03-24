function oddOccurence (inputString) {
    
let lowerCaseText = inputString.toLowerCase();
let arrOfWords = lowerCaseText.split(" ");
let wordObj = {};
for( let word of arrOfWords ){
    if (wordObj.hasOwnProperty(word)){
        wordObj[word] += 1;
    } else {
        wordObj[word] = 1;
    }
}

// console.log(wordObj);
 let filtered = Object.entries(wordObj);
 let resultFiltered = filtered.filter((elements) => elements[1] % 2 == 1);
 
//  let resultArr=[];
//  for ( let words of resultFiltered){
//     resultArr.push(words[0]);
//  }
//  console.log(resultArr.join(" "));
 let result = resultFiltered.map(element => element[0]).join(" ");
 console.log(result);

 
}
oddOccurence ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

console.log(`*****`);

oddOccurence ('Cake IS SWEET is Soft CAKE sweet Food');