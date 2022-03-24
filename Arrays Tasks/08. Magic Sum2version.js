function solve(array) {

    result = [];

    for (let i = 0; i < array.length; i++) {
        
        let currentElement = array[i];

        for (let index = 0; index < array.length; index++) {
            
            let nextElement = array[index];
            
            let isMagic = (currentElement + nextElement);
            let possibeSequence = `${currentElement} ${nextElement}`;

             if ((index !== i ) && (isMagic)&& (!result.includes(possibeSequence))) {
                 result.push (`${currentElement} ${nextElement}`)
             }
        }
    }
    
    console.log(result);
}
solve([14, 20, 60, 13, 7, 19, 8], 27);


