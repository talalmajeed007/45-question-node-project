/*
    Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_users:string[]=["ali","ahmed","abdullah","akbar","muhammad"];
let new_users:string[]=["elif","Ali","aHmed"];

for (let i = 0; i < new_users.length; i++) {
     let msg2=new_users[i].toLowerCase();
     let usernametaken=false;
     for (let y = 0; y < current_users.length; y++) {
        if (msg2===current_users[y].toLowerCase()) {usernametaken=true;
        break} 
      }
      if (usernametaken===true) {console.log("username already taken");
    } else{console.log("username available");
      }
    }
   
