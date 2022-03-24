function towns(input) {

    let finalresult = {};

    for (let tokens of input) {
      
       let info = tokens.split(" | "); 
       let townName = info [0];
       let latitude = Number(info [1]).toFixed(2);
       let longtitude = Number(info [2]).toFixed(2);
       
       finalresult.town = townName; 
       finalresult.latitude = latitude;
       finalresult.longitude= longtitude;
       console.log(finalresult);
    }



}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
