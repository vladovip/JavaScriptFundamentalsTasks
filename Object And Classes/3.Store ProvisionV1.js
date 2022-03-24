function storeProvision(availableStock, deliveredStock ) {

      let storeProducts = {};

       for (let index = 0; index < availableStock.length; index+=2 ) {
              let currentProduct = availableStock[index];
              storeProducts[currentProduct] = Number (availableStock[index+1]);       
       }
       
       for (let index = 0; index < deliveredStock.length; index+=2) {
            let currentProduct = deliveredStock[index]
           
            if  (!storeProducts.hasOwnProperty(currentProduct)){
              storeProducts[currentProduct] = 0;
            }
            storeProducts[currentProduct] += Number (deliveredStock[index+1]);    
       }
       
        for (let product in storeProducts) {
           console.log(`${product} -> ${storeProducts[product]}`); 
        }


}

storeProvision (
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

