function solve(x1,y1,x2,y2){
    
    
    var a = x1 - x2;
    var b = y1 - y2;
    
    var dist = Math.sqrt( a*a + b*b );

    //var dist = Math.hypot(a,b);
    
    //var dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
    
    console.log(dist);


}
solve(2.34, 15.66, -13.55, -2.9985);

