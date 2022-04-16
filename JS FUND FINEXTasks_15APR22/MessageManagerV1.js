function messageManager (inputArr){

    let CapacityPerUser = Number(inputArr.shift());

    let commandLine = inputArr.shift();
    let recordsOfUsers = {};

    while ( commandLine != "Statistics"){
          let tokens = commandLine.split("=");
          let command = tokens[0];
          
          if ( command == "Add"){
              let username = tokens[1];
              let sendMessages = +tokens[2];
              let receivedMessages = +tokens[3];
            if ( recordsOfUsers.hasOwnProperty(username) == false ){
                   recordsOfUsers[username] = { send : sendMessages, received: receivedMessages  }
            } else if ( recordsOfUsers.hasOwnProperty(username) == true ){
              continue;
            }

          } else if ( command == "Message" ){
               let sender = tokens[1];
               let receiver = tokens[2];
               if (recordsOfUsers.hasOwnProperty(sender) == true && recordsOfUsers.hasOwnProperty(receiver)){
                recordsOfUsers[sender].send += 1;
                recordsOfUsers[receiver].received += 1;
               }
               if( recordsOfUsers[sender].send + recordsOfUsers[sender].received >= CapacityPerUser ){
                console.log(`${sender} reached the capacity!`); 
                delete recordsOfUsers[sender];  
                
               }
               if( recordsOfUsers[receiver].send + recordsOfUsers[receiver].received >= CapacityPerUser ){
                console.log(`${receiver} reached the capacity!`); 
                delete recordsOfUsers[receiver];  
               }

          } else if ( command == "Empty"){
                  let  userName = tokens[1];
                  if( recordsOfUsers.hasOwnProperty(userName) == true  ){
                   delete recordsOfUsers[userName];
                  } 
                  if ( userName == "All"){
                      for ( let users in recordsOfUsers ){
                          delete recordsOfUsers[users];
                      }
                  }
          }
          commandLine = inputArr.shift();
    }
      let countOfUser = Object.keys(recordsOfUsers).length;
      console.log(`User count: ${countOfUser}`);
      for( let user in recordsOfUsers){
          let numberOfMessages = recordsOfUsers[user].send + recordsOfUsers[user].received;
          console.log(`${user} - ${numberOfMessages}`);
      }

}
messageManager (["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);

console.log(`-----------`);

messageManager ((["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])
);

console.log(`--------`);


messageManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]);
