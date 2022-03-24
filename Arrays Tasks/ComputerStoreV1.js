function computerStore(nums) {

    let sum = 0;
    let taxes = 0;
    let result = '';
    let discount = 0;

    if (nums[0] === 'regular' || nums[0] === 'special') {
        return 'Invalid order!';
    }
    for (let i = 0; i < nums.length - 1; i++) {
        let price = Number(nums[i]);

        if (price > 0) {
            sum += price;

        } else {
            result += `Invalid price!` + `\n`;
            continue;
        }

    }
    taxes = sum * 0.2;
    sum = sum * 0.8;
    let priceWithoutTaxes = Number(sum) + Number(taxes);

    if (nums[nums.length - 1] === 'regular') {
        result +=
            `Congratulations you've just bought a new computer!
Price without taxes: ${(priceWithoutTaxes).toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${(priceWithoutTaxes + taxes).toFixed(2)}$`;
    }
    if (nums[nums.length - 1] === 'special') {
        discount = sum * 0.10;
        sum = sum * 0.90;
        result +=
            `Congratulations you've just bought a new computer!
Price without taxes: ${(priceWithoutTaxes).toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${(priceWithoutTaxes + discount).toFixed(2)}$`;
    }
    if (priceWithoutTaxes + taxes === 0) {
        return 'Invalid order!';
    } else {
        return result;
    }
}