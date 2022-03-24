
function sumOfOddNumbers(number){
    let sum=0;
    let counter=0;
    let current=1;
    while(counter<number){
        if(current%2!=0){
            console.log(current);
            sum+=current;
            counter++
           
        }
        current++;
    }  
    console.log(`Sum: ${sum}`);
   
 
}
sumOfOddNumbers (5)

/*  Second Option : 
function sumOfOddNumbers(number){
    let sum=0;
    let counter=0;
    let current=1;
    while(counter<number){
        if(current%2!=0){
            console.log(current);
            sum+=current;
            counter++
            
        }
        current++;
    }  
    console.log(`Sum: ${sum}`);
    

} */