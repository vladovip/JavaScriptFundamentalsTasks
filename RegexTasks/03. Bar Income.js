function solve(input) {
    let income = 0;
 
    while (input[0] !== 'end of shift') {
        const line = input.shift();
        const regEx = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|([^\d]*)?(?<price>\d+(\.\d+)?)\$/;
        if (regEx.exec(line) !== null) {
            let {name, product, count, price} = regEx.exec(line).groups;
            count = +count;
            price = +price;
 
            income += price * count;
            console.log(`${name}: ${product} - ${(price * count).toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

solve (['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);

console.log(`*******`);

solve (['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']
);
