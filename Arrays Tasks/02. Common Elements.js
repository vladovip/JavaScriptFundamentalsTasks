function solve(arr1, arr2){
let result = " ";

for ( let elements1 of arr1 ){
 
    for ( let elements2 of arr2 ){ 

        if ( elements1 === elements2){
            result = elements1;
            console.log(result);
        }
        
    }
    
}

}

solve(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']

);



/*function equalArrays(arr1, arr2) {

    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }

        sum += Number(arr1[i]);
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10','20','30'], ['10','20','30']);*/


/* for(let i=0 ;  i < arr1.length; i++ ){
        
    if( arr1[i] === arr2[i]){
        let commonElements = arr1[i];
        result += commonElements;
        console.log (result);
    }
    
}*/ 