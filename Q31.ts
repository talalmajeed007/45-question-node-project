/*
    No Users: Add an if test to previous que to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let usernames: string[] =['admin', 'user1','user2','user3','user4','user5'];
let ADMIN: string ="admin";
for (let i = 0; i < usernames.length; i++) {
   if (usernames[i]===ADMIN) {console.log( "Hello admin, would you like to see a status report?")
} else {console.log(`hello "${usernames[i]}"thank you for logging in again.`)}   
}
console.log("---------------------------------------------------------------------------");
if (usernames.length!==0) {console.log("just making sure the names of users logged in")}
else{console.log("We need to find some users!")
}
console.log("---------------------------------------------------------------------------");
usernames=[];
if (usernames.length!==0) {console.log("just making sure the names of users logged in")}
else{console.log("We need to find some users!")
}
    
