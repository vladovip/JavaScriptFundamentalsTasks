function santaHelper (inputArr){

    let keyOfSanta = +inputArr.shift();
    let tempDecryptedArr = [];
    let currentMessage = inputArr.shift();

    while ( currentMessage != 'end') {
        let currentDecryptMessage = currentMessage.split('').map(function(element){ 
            let newCharCode = element.charCodeAt() - keyOfSanta;
            return  element = String.fromCharCode(newCharCode);
        }).join("");
        tempDecryptedArr.push(currentDecryptMessage);

        currentMessage = inputArr.shift();
    }
    //   console.log(tempDecryptedArr);
    // [ '@Kate^jfdvbkrjgb!G!', '@Bobbie*kjdrrbgkT!G!', '@Stan#dkjghskd!N!' ]  - tempDecryptedArr
    
    let patternNameMatch =  /[^@\-!:]*[^and]*@(?<name>[A-Z][a-z]+)[^@\-\!\:]*[and]*!(?<typeOfPerson>G|N)!/g
    let totalListPeopleArr = [];
    for ( let eachPersonInfo of tempDecryptedArr ) {
        let matchArr = patternNameMatch.exec(eachPersonInfo);
        while ( matchArr!== null  ) {
               let personName = matchArr.groups.name;
               let typeBehaviour = matchArr.groups.typeOfPerson;
               if (typeBehaviour == 'G') {
                totalListPeopleArr.push(personName);
               }
            matchArr = patternNameMatch.exec(eachPersonInfo);
        }
    }
    console.log(totalListPeopleArr.join("\n"));

}



santaHelper (['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end']
); 
console.log(`***************`);
santaHelper (['3',
'N}eideidmk$\'(mnyenmCNlpamnin$J$',
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']
); 

console.log(`***************`);

santaHelper (["4",
    "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
    "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
    ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    "DReh}e=<4lhzj1%K%",
    "end"]);

// @(?<name>[A-Za-z]+)[^@\-!:]*[^and]*!(?<typeOfPerson>[GN])! 

// @(?<name>[A-Za-z]+)[^@\-!:]*[^and]*!(?<typeOfPerson>G|N)!

// [^@\-!:]*[^and]*@(?<name>[A-Za-z]+)[^@\-!:]*[^and]*!(?<typeOfPerson>G|N)!

// [ '@Kate^jfdvbkrjgb!G!', '@Bobbie*kjdrrbgkT!G!', '@Stan#dkjghskd!N!' ]

// [^@\-!:]*[^and]*@(?<name>[A-Z][a-z]+)[^@\-\!\:]*[and]*!(?<typeOfPerson>G|N)!

