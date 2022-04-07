

function solve(input) {
    const text = input[0]
    const regex = /[@#]+([a-z]{3,})[@#]+[^a-zA-Z0-9]/+([0-9]+)/+/g;
    const local = /[@#]+([a-z]{3,})[@#]+[^a-zA-Z0-9]/+([0-9]+)/+/;
    const results = text.match(regex);
    if(results) {
        for(const result of results) {
            const arr = local.exec(result);
            console.log(`You found ${arr[2]} ${arr[1]} eggs`)
        }
    }
}
solve(['@@@@green@/10/@yel0w@26#red#####//8//@limon@23@@@red#/%^&/6/@gree_een@/notnumber/###purple@@@@@$%^&*/5/'])