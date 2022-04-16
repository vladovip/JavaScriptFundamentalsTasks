function solve(arr) {
  let key = arr.shift();
  let r = "";
  const commandsMap = {
    Contains: (str, arr) => {
      str.includes(arr[0]) == true
        ? (r += `${str} contains ${arr[0]}\n`)
        : (r += "Substring not found!\n");
      return str;
    },
    Flip: (str, arr) => {
      let [caseSensitivity, start, end] = arr;
      let sliced = str.split("").slice(Number(start), Number(end)).join("");
      let replaced = sliced[`to${caseSensitivity}Case`]();
      str = str.replace(sliced, replaced);
      r += `${str}\n`;
      return str;
    },
    Slice: (str, arr) => {
      let [start, end] = arr.map(Number);
      str = str.split("");
      str.splice(start, end - start);
      r += `${str.join("")}\n`;
      return str.join("");
    },
  };
  for (const e of arr) {
    if ((e == "Generate") == true) {
      return r + `Your activation key is: ${key}`;
    }

    let [command, ...rest] = e.split(">>>");
    key = commandsMap[command](key, rest);
  }
}
w