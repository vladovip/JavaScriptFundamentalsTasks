function solve(input) {
    const regEx = /(\s|^)(?<email>(?<user>[0-9a-zA-Z][.\-_0-9a-zA-Z]*[0-9a-zA-Z])@(?<host>([a-zA-Z]+(-+[a-zA-Z]+)?)\.([a-zA-Z]+(-+[a-zA-Z]+)?)(\.([a-zA-Z]+(-+[a-zA-Z]+)?))?))/g
    let emails = [];
    let result = regEx.exec(input);
 
    while (result !== null) {
        emails.push(result.groups.email);
        result = regEx.exec(input);
    }
 
    for (const email of emails) {
        console.log(email);
    }
}

solve ('Please contact us at: support@github.com.');
solve ('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
solve ('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');