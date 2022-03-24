function city(cityInformation){


    let properties = Object.keys(cityInformation);
    // console.log(properties);
    
    for ( let key of  properties){
        console.log(`${key} -> ${cityInformation[key]}`);
    }
    
    
}


city ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
 );


 city ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);




//name, area, population, country and postCode.