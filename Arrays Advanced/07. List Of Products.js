function solve(input){


    let sortedElements = input.sort();

    for (let i = 0; i < sortedElements.length; i++){
       
        console.log((`${i+1}.${sortedElements[i]}`));

    }

    //console.log(sortedElements);



}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"])