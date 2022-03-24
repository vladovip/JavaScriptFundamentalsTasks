function party(input){
    let vipList = [];
    let regList = [];
    let reservation = input.shift();
 
    while(reservation !="PARTY"){
        if(/^\d+/.test(reservation)){
            vipList.push(reservation);
        } else {
            regList.push(reservation);
        }
 
        reservation = input.shift();
    }
 
    for (const guest of input) {
        if(vipList.includes(guest)){
            vipList.splice(vipList.indexOf(guest), 1);
        } 
        
        if(regList.includes(guest)){
            regList.splice(regList.indexOf(guest),1);
        }
    }
 
    console.log(vipList.length + regList.length);
    vipList.forEach(element => console.log(element));
    regList.forEach(element => console.log(element));
    
}