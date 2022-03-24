function bin2dec(num){
    
    return num.split('').reverse().reduce(function(x, y, i){
    return (y === '1') ? x + Math.pow(2, i) : x;
    
    }, 0);
 
}
