function heroesOfCodes (input){
 
    let n = input.shift();
    let heroes = {};
    
    for (let index = 0; index < n; index++) {
            
        let heroData = input.shift().split(" ");
        let name = heroData [0];
        let hP =   Number (heroData[1]);
        let mP = Number (heroData[2]);

        heroes[name] = {
            hP,
            mP,
        }
    }

    while ( input[0] != "End" ){
         
        let tokens = input.shift().split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        let hero = heroes[name];
        
        if ( command == "CastSpell"){
            if ( hero.mP >= p1){
                hero.mP -= p1;
                console.log(`${name} has successfully cast ${p2} and now has ${hero.mP} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`);
            }

        } else if(command == "TakeDamage"){
         hero.hP -= p1;
         if( hero.hP > 0){
            console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hP} HP left!`);
         } else {
            delete heroes[name];
            console.log(`${name} has been killed by ${p2}!`);
         }
        }else if(command == "Recharge"){
           let smallestMP = Math.min(200 - hero.mP, p1);  
           hero.mP += smallestMP;
           console.log(`${name} recharged for ${smallestMP} MP!`);

        }else if(command == "Heal"){
           
           let smallestHP = Math.min(100 - hero.hP, p1);  
           hero.hP += smallestHP;
           console.log(`${name} healed for ${smallestHP} HP!`);
        }
    }
    
    for (let heroData of Object.entries(heroes)) {
        let name = heroData[0];
        let hero = heroData[1];
       console.log(name); 
       console.log(`  HP: ${hero.hP}`);
       console.log(`  MP: ${hero.mP}`);

    }


}

heroesOfCodes ([
    "2",
"Solmyr 85 120",
"Kyrre 99 50",
"Heal - Solmyr - 10",
"Recharge - Solmyr - 50",
"TakeDamage - Kyrre - 66 - Orc",
"CastSpell - Kyrre - 15 - ViewEarth",
"End",
]);