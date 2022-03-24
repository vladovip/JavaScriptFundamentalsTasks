function solve(arr) {

    
    let resultArr = [];
    let empty = 'Empty';

    for (let i = 0; i < arr.length; i++) {
        let arrCommand = arr[i];
        
        if (arrCommand === 'add') {
            resultArr.push(i + 1);
        }
        else if (arrCommand === 'remove') {
            resultArr.pop();
        }
        
    }  
   
    if (!(resultArr.length > 0)){
        console.log(empty);
    } else{
     console.log(resultArr.join(' '));
    }
}




solve(['remove', 'remove', 'remove']);