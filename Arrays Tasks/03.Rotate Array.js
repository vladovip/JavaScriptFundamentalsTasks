function solve(arr)
{
    let rotations = arr[arr.length - 1];
    arr.pop();
    for(let i = 1; i <= rotations; i++)
    {
        let current = arr.pop();
        arr.unshift(current);
    }
    
    if (!(arr.length > 0)){
        console.log(empty);
    } else {
        console.log(arr.join(' '));
    } 
    
}

solve(['remove', 'remove', 'remove'] );

// let current = arr.pop();

// arr.unshift(current);