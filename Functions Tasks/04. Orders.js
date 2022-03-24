function foodTotalPrice(productType, quantity, ) {
    
    let foodTotalPrice = 0 ;
    let product = productType.toString();

    switch (product) {

        case 'coffee':
           foodTotalPrice =  quantity * 1.50;
            break;
        case 'coke':
            foodTotalPrice =  quantity * 1.40;
            break;
        case 'water':
            foodTotalPrice =  quantity * 1.00;
            break;
        case 'snacks':
            foodTotalPrice = quantity * 2.00;
            break;
    }

    console.log(foodTotalPrice.toFixed(2));
}
foodTotalPrice( 'water' , 5);