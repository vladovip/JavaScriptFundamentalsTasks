
function messageDecrypter(input) {
    let inputCount = input.shift();
    let regex =
      /^([$%])(?<validTag>([A-Z][a-z]{2,}))\1\:\s\[(?<forDecryption1>(\d+))\]\|\[(?<forDecryption2>(\d+))\]\|\[(?<forDecryption3>(\d+))\]\|$/;
   
    for (let i = 0; i < inputCount; i++) {
      let match = regex.exec(input[i]);
      if (match != null) {
      let tag = match.groups.validTag;
      let dec = String.fromCharCode(
        match.groups.forDecryption1,
        match.groups.forDecryption2,
        match.groups.forDecryption3
      );
        console.log(
          `${tag}: ${dec}`
        );
      } else {
        console.log("Valid message not found!");
      }
    }
  }