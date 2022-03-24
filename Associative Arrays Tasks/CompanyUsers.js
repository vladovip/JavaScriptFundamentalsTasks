function companyUsers(users){
 
    
    let result = {};
 
    for (let line of users) {
        let [name, user] = line.split(" -> ")
        
        if(result.hasOwnProperty(name) === false){
            result[name] = new Set()
        }
            
        result[name].add(user)   
    }
 
   let resultEntries = Object.entries(result)
   .sort((a, b) => a[0].localeCompare(b[0]))
 
   for (let [company, users] of resultEntries) {
        console.log(company);
 
        for (let user of users) {
        console.log(`-- ${user}`)
            
        }   
   }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )