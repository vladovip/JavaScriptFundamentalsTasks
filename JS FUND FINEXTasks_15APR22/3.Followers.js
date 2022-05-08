function solve(input) {
    let list = {}

    while (input[0] !== 'Log out') {
        let line = input.shift()
        let [command, userName, count] = line.split(': ')

        if (command == 'New follower') {
            if (!list.hasOwnProperty(userName)) {
                list[userName] = {
                    likes: 0,
                    comments: 0,
                }
            }
        } else if (command == 'Like') {
            count = Number(count);
            if (!list.hasOwnProperty(userName)) {
                list[userName] = {
                    likes: count,
                    comments: 0
                }
            } else {
                list[userName].likes += count
            }
        } else if (command == 'Comment') {
            if (!list.hasOwnProperty(userName)) {
                list[userName] = {
                    likes: 0,
                    comments: 1,
                }
            } else {
                list[userName].comments += 1
            }
        } else if (command == 'Blocked') {
            if (!list.hasOwnProperty(userName)) {
                console.log(`${userName} doesn't exist.`);
            } else {
                delete list[userName]
            }
        }
    }
    let numfollowers = Object.entries(list)
    console.log(`${numfollowers.length} followers`);

    for (let userName in list) {
        console.log(`${userName}: ${list[userName].likes + list[userName].comments}`);
    }
}

solve(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])