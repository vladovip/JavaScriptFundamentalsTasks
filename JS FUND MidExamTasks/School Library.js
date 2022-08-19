function readArr(arr) {
    let booksInShelf = arr.shift().split('&');
    let splitted;
    let getIndex;
    let positionOfFirstBook;
    let positionOfSecondBook;
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        splitted = arr[i].split(" | ");
        if (splitted[0] == "Add Book") {
            if (booksInShelf.includes(splitted[1]) == false) {
                booksInShelf.unshift(splitted[1]);
            }
        }
        if (splitted[0] == "Take Book") {
            if (booksInShelf.includes(splitted[1]) == true) {
                getIndex = booksInShelf.indexOf(splitted[1]);
                booksInShelf.splice(getIndex, 1)
            }
        }
        if (splitted[0] == "Insert Book") {
            if (booksInShelf.includes(splitted[1]) == false) {
                booksInShelf.push(splitted[1])
            }
        }
        if (splitted[0] == "Check Book") {
            if (splitted[1] >= 0 && splitted[1] < arr.length) {
                console.log(booksInShelf[splitted[1]]);
            }
        } 
        if (splitted[0] == "Swap Books") {
            position = splitted.slice(1, splitted.length);
            positionOfFirstBook = position[0]
            positionOfSecondBook = position[1]
            positionOfFirstBook = booksInShelf.indexOf(positionOfFirstBook);
            positionOfSecondBook = booksInShelf.indexOf(positionOfSecondBook);
            if (positionOfFirstBook >= 0 && positionOfSecondBook >= 0) {
                temp = booksInShelf[positionOfSecondBook];
                booksInShelf[positionOfSecondBook] = booksInShelf[positionOfFirstBook];
                booksInShelf[positionOfFirstBook] = temp;
            }
        }
    }
    console.log(booksInShelf.join(', '));
}
readArr(["Don Quixote&The Great Gatsby&Moby Dick", "Add Book | Ulysses", "Take Book | Don Quixote", "Insert Book | Alice's Adventures in Wonderland", "Done"])