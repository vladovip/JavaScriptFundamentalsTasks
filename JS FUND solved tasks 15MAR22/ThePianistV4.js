function thePianist(input) {
  let n = Number(input.shift());
  let result = {};

  for (let index = 0; index < n; index++) {
    let tokens = input.shift().split("|");
    let piece = tokens[0];
    let composer = tokens[1];
    let key = tokens[2];

    result[piece] = {
      composer,
      key,
    };
  }

  while (input[0] !== "Stop") {
    let line = input.shift();
    let tokens = line.split("|");
    let command = tokens[0];

    if (command === "Add") {
      let pieceNew = tokens[1];
      let composerNew = tokens[2];
      let keyNew = tokens[3];

      if (result.hasOwnProperty(pieceNew) === false) {
        result[pieceNew] = {};
        result[pieceNew].composer = composerNew;
        result[pieceNew].key = keyNew;
        console.log(
          `${pieceNew} by ${composerNew} in ${keyNew} added to the collection!`
        );
      } else {
        console.log(`${pieceNew} is already in the collection!`);
      }
    } else if (command === "Remove") {
      let pieceNew = tokens[1];
      if (result.hasOwnProperty(pieceNew) === false) {
        console.log(
          `Invalid operation! ${pieceNew} does not exist in the collection.`
        );
      } else {
        delete result[pieceNew];
        console.log(`Successfully removed ${pieceNew}!`);
      }
    } else if (command === "ChangeKey") {
      let pieceNew = tokens[1];
      let keyNew = tokens[2];

      if (result.hasOwnProperty(pieceNew)) {
        result[pieceNew].key = keyNew;
        console.log(`Changed the key of ${pieceNew} to ${keyNew}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceNew} does not exist in the collection.`
        );
      }
    }
  }

  let entries = Object.entries(result);

  for (let [name, properties] of entries) {
    console.log(
      `${name} -> Composer: ${properties.composer}, Key: ${properties.key}`
    );
  }
}
