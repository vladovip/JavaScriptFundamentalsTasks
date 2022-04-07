
function magicCommands ( input ){
    let spell = input.shift();
    //console.log(spell); //A7ci0
    while (input != "Abracadabra") {
      let info = input.shift().split(" ");
      let message;
      //console.log(info); //(3) ['Illusion', '1', 'c']
      let command = info[0];
      //console.log(command); //Illusion
      if (command === "Abjuration") {
        spell = spell.toUpperCase();
        console.log(spell);
      } else if (command === "Necromancy") {
        spell = spell.toLowerCase();
        console.log(spell);
      } else if (command === "Illusion") {
        let index = +info[1];
        let letter = info[2];
        //console.log(index, letter); //1 c
        message = spell.split("");
        if (spell.length > index) {
          message.splice(index, 1, letter);
          spell = message.join("");
          console.log("Done!");
        } else {
          console.log("The spell was too weak.");
        }
      } else if (command === "Divination") {
        let firstStr = info[1];
        let secondStr = info[2];
        spell = spell.split(firstStr);
        spell = spell.join(secondStr);
        console.log(spell);
      } else if (command === "Alteration") {
          let substr = info[1];
          //console.log(substr); //master
          if(spell.includes(substr)){
              message = spell.replace(substr, "");
              spell = message;
              console.log(spell);
          }
      }else{
          console.log("The spell did not work!");
      }
    }
  }


