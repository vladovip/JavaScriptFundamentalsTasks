function solve(str, symbol, result) {
    
    let replaceWord = str.replace('_', symbol);

    let output = replaceWord === result ? "Matched" : "Not Matched";
    console.log(output);

  }
  solve('Str_ng', 'o', 'Strong');
