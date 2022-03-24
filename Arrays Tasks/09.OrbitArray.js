
function orbit(coordinates){
    let width = coordinates[0]
    let heigth = coordinates[1];
    let matrix = [];
    // fill the matrix with zero(0)
    for(let i = 0; i<width; i++){
        matrix.push([]);
        for(let j =0; j<heigth; j++){
            matrix[i][j] = 0;
        }
    }
 
    //point the star
    matrix[coordinates[2]][coordinates[3]] = 1;
 
    for(let i = 0; i<width; i++){
        for(let j =0; j<heigth; j++){
                
                let number1 = Math.max(1+ Math.abs(i-(coordinates[2])), 1+Math.abs(j-(coordinates[3])));
               
                matrix[i][j] =  number1;
           // }
        }
    }
    
    //Print the Result    
    for (let iterator of matrix) {
        console.log(iterator.join(' '));
    }
}
orbit([5, 5,0, 0])