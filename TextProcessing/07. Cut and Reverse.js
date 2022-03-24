function solve (inputStr) {
   
    let firstHalf = inputStr.split("").slice(0, inputStr.length/2).reverse().join("");
    let secondHalf = inputStr.split("").slice(inputStr.length/2, inputStr.length ).reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);

}

solve('tluciffiDsIsihTgnizamAoSsIsihT'); 

console.log(`******`);

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'); 