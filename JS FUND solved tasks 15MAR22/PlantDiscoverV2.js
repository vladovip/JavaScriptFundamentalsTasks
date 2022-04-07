function plantDiscovery(input){
 
    let actions = {
      'Rate': rate,
      'Update': update,
      'Reset': reset,
    }  
   
    let n = Number(input.shift())
    
    let plants = {};
    
    for (let index = 0; index < n; index++) {
      let [plant, rarity] = input.shift().split("<->")
      rarity = Number(rarity)
    
      plants[plant] = {
        rarity,
        ratings: [],
        avgRating: 0,
      }
    }
    
    while (input[0] !== 'Exhibition') {
      let tokens = input.shift().split(": ")
      let command = tokens[0]
      let params = tokens[1]
      let action = actions[command]
      action(params)
    
    }
   
   
    function rate(params){
       //"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
        let [plant, num] = params.split(" - ")
        num = Number(num)
      
        if(plants.hasOwnProperty(plant)){
          plants[plant].ratings.push(num)
          
        }else{
          console.log('error')
        }
    }
   
    function update(params){
        //"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
    let [plant, newRarity] = params.split(" - ")
    newRarity = Number(newRarity)
    if(plants.hasOwnProperty(plant)){
      plants[plant].rarity = newRarity
    }else{
      console.log('error')
    }
   
    }
   
    function reset(params){
        //"Reset: {plant}" – remove all the ratings of the given plant
        let plant = params
        if(plants.hasOwnProperty(plant)){
          plants[plant].ratings.length = 0
        }else{
          console.log("error")
        }
        
    }
    
    
    let entries = Object.entries(plants)
    
    
    
        console.log(`Plants for the exhibition:`)
        for (let [name, properties] of entries) {
        
          let plant = plants[name]
          if(plant.ratings.length > 0){
            let current = plant.ratings.reduce((a, b) => a + b, 0) / plant.ratings.length
            plant.avgRating = current
            console.log(`- ${name}; Rarity: ${properties.rarity}; Rating: ${properties.avgRating.toFixed(2)}`)
    
          }else{
            console.log(`- ${name}; Rarity: ${properties.rarity}; Rating: ${properties.avgRating.toFixed(2)}`)
          }
          
           
        }
    
    
    }