function leapYear (year) {
   
    let firstCase = (year %  4===0 )  && ( year%100!==0 );
    let secondCase = (year%  400===0) ;
    
    if(firstCase || secondCase){
        console.log(`yes`);
    } else{
        console.log(`no`);
    }
 
   
}
leapYear(1984);