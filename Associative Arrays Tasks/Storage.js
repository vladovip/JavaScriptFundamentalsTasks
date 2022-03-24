function storage (inputArr) {
    
      let result = new Map();

      for(let line of inputArr){
          let [product, qty] = line.split(" ");
          qty = Number(qty);

          if (result.has(product)){
             let existing = result.get(product);
             result.set(product, qty + existing);
          }
          else {
              result.set(product, qty);
          }
      }
      
      //console.log(result);
      let allproducts = result.entries();
      for ( let [product, qty] of allproducts ){
          console.log(`${product} -> ${qty}`);
      }
 
    

    
}
storage (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);

console.log("-----------");

storage (['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);