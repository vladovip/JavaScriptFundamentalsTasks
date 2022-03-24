function comments(arr) {
 
    let webComments = {};
    let users = [];
    let articles = [];
 
    while (arr.length > 0) {
 
        let line = arr.shift();
 
        if (line.includes('user')) {
            line = line.split(' ');
            line.shift();
            let userName = line.join('');
            users.push(userName);
 
        } else if (line.includes('article')) {
            line = line.split(' ');
            line.shift();
            let articleName = line.join('');
            articles.push(articleName);
 
        } else if (line.includes(':')) {
            line = line.split(': ');
            let userAndArticleInfo = line[0].split(' ');
            let userName = userAndArticleInfo.shift();
            let article = userAndArticleInfo.pop();
            let titleAndComment = line[1].split(', ');
            let title = titleAndComment.shift();
            let comment = titleAndComment.pop();
 
            if (users.includes(userName) && articles.includes(article)) {
                if (!webComments.hasOwnProperty(article)) {
                    webComments[article] = [];
                }
                webComments[article].push({
                    user: userName,
                    comment: {
                        title,
                        comment
                    }
                });
            }
        }
    }
    let sortedByCountOfComments = Object.keys(webComments).sort((a, b) => Object.values(webComments[b]).length - Object.values(webComments[a]).length);
 
    sortedByCountOfComments.map(article => {
        console.log(`Comments on ${article}`);
 
        let sortedUsers = webComments[article].sort((a, b) => a.user.localeCompare(b.user));
        sortedUsers.map(user => console.log(`--- From user ${user.user}: ${user.comment.title} - ${user.comment.comment}`));
    });
}