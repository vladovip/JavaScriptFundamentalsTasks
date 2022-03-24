function phoneBook (inputArr) {
    
    let result = new Map();
    for (let line of inputArr) {
        let [name, phone] = line.split(" ");

        result.set(name, phone);
    }
    // console.log(result);
    // let keys = result.keys();
    // for (let key of keys) {
    //     console.log(key,"->", result.get(key));
    // }

    let entries = result.entries();
    for (let [name, phone] of entries) {
        console.log(name,"->", phone);   
    }
 }
 
 
 phoneBook ( ['Tim 0834212554',
 'Peter 0877547887',
 'Bill 0896543112',
 'Tim 0876566344']
  )
 
  console.log("--------");
 
 
  phoneBook (['George 0552554',
  'Peter 087587',
  'George 0453112',
  'Bill 0845344']
 );