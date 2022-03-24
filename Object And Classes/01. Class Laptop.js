

class Laptop {
  
    constructor (info, quality){
     
        this.info = {
            producer: producer,
            age : age,
            brand : brand,
        };

        this.isOn = false;
        
        this.turnOn = () =>{
            if (this.isOn === false){
                this.isOn = true; 
            }
        };

        this.turnOff = () => {
            if (this.isOn === true){
                this.isOn = false;
            }
        };

        this.showInfo = () => {
            console.log(JSON.stringify(info))
        };
       
        this.quality = () =>{
            while (quality > 0 && (laptop.turnOn() || laptop.turnOff())){
                quality--;
            }
        };

        this.getterPrice = (800 - (age * 2) + (quality * 0.5));  
    
    } 
      
}



let info = {producer: "Dell", age: 2, brand: "XPS"};
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);
