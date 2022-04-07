function solve(input) {
  let pattern =
    /^(\$|%)(?<tag>[A-Z][a-z]{2,})\1: (?:\[)(?<num1>\d+)(?:\])\|(?:\[)(?<num2>\d+)(?:\])\|(?:\[)(?<num3>\d+)(?:\])\|$/g;

  let num = Number(input.shift());

  for (let i = 0; i < num; i++) {
    let line = input[i];
    let match = pattern.exec(line);
    let text = "";
    if (match !== null) {
      text = String.fromCharCode(
        Number(match.groups.num1),
        Number(match.groups.num2),
        Number(match.groups.num3)
      );
      console.log(`${match.groups.tag}: ${text}`);
    } else {
      console.log(`Valid message not found!`);
    }
  }
}
solve(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])

