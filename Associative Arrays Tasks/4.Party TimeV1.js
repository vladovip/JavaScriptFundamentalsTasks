function partyTime(inputArr) {
    
  let vipInvitation =  new Set ();
  let regularInvitation = new Set (); 

   while (inputArr[0] != "PARTY"){
      let guest = inputArr.shift();
       //console.log(guest[0]);
       if (Number.isNaN(Number(guest[0]))){
        // console.log(guest[0]);
        regularInvitation.add(guest);
       } else {
        vipInvitation.add(guest);
       }
   }
    //  console.log(regularInvitation);
    //  console.log(vipInvitation);
    
    for ( let guest of inputArr ){
      regularInvitation.delete(guest);
      vipInvitation.delete(guest);
    }

    console.log(vipInvitation.size + regularInvitation.size);
    for (let  guest of vipInvitation  ){
           console.log(guest);
    }
    for (let  guest of regularInvitation  ){
      console.log(guest);
}


}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);



partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
