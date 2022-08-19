function deckOfCards (array){
 
    let deck = array.shift().split(", ")
    let number = Number(array.shift())// с Number отпред явно работи
     
    for (let i = 0; i < number; i++){
        let tokens = array[i].split(", ")
        let command = tokens[0]
        let indexName = tokens[1]
        let cardName = tokens[2]
     
        if(command === "Add"){
            //let index = Number(indexName) ще го ползвам, ако не работи с includes, но не мисля, че ще се наложи
            if(deck.includes(indexName)){// да видя дали ще има смисъл с deck[index] === indexName
                console.log("Card is already in the deck")
            }else{
                deck.push(indexName)
                console.log("Card successfully added")
            }
     
        }
     
        else if(command === "Remove"){
     
            if(deck.includes(indexName)){
                let findIndex = deck.indexOf(indexName)
                deck.splice(findIndex, 1)
                console.log("Card successfully removed")
            }else{
                console.log("Card not found")
            }
     
        }
     
        else if(command === "Remove At"){
            let currentIndex = Number(indexName)
            if(currentIndex >= 0 && currentIndex < deck.length){
                deck.splice(currentIndex, 1)
                console.log("Card successfully removed")
     
            }else{
                console.log("Index out of range")
            }
     
        }
     
        else if(command === "Insert"){
            let currentIndex = Number(indexName)
            if(currentIndex >= 0 && currentIndex < deck.length){
                if(deck.includes(cardName)){
                    console.log("Card is already added")
                }else{
                    deck.splice(currentIndex, 0, cardName)
                    console.log("Card successfully added")
                }
     
            }else{
                console.log("Index out of range")
            }
     
        }
     
    }
     
    console.log(deck.join(", "))
       
    }

    
    deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])