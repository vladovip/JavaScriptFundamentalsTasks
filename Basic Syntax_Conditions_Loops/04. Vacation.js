function vacation(quantity, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                if (quantity >= 30) {
                    price = (quantity * 8.45) * 0.85;
                } else {
                    price = quantity * 8.45;
                }
 
            } else if (type === "Business") {
                if (quantity >= 100) {
                    price = ((quantity - 10) * 10.90) 
                }else {
                    price = quantity*10.90;
                }
            }else {
                if (quantity >= 10 && quantity < 20){
                    price = (quantity*15)*0.95;
                }else {
                    price = quantity*15;
                }
            }break;
        case "Saturday":
            if (type === "Students") {
                if (quantity >= 30) {
                    price = (quantity * 9.80) * 0.85;
                } else {
                    price = quantity * 9.80;
                }
 
            } else if (type === "Business") {
                if (quantity >= 100) {
                    price = ((quantity - 10) * 15.60)
                }else {
                    price = quantity*15.60;
                }
            } else {
                if (quantity >= 10 && quantity < 20){
                    price = (quantity*20)*0.95;
                }else {
                    price = quantity*20;
                }
            }break;
        case "Sunday":
            if (type === "Students") {
                if (quantity >= 30) {
                    price = (quantity * 10.46) * 0.85;
                } else {
                    price = quantity * 10.46;
                }
 
            } else if (type === "Business") {
                if (quantity >= 100) {
                    price = ((quantity - 10) * 16)
                }else {
                    price = quantity*16;
                }
            }else {
                if (quantity >= 10 && quantity < 20){
                    price = (quantity*22.50)*0.95;
                }else {
                    price = quantity*22.50;
                }
            }break;
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}  
vacation (40,
    "Regular",
    "Saturday"
    );