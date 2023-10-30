// Great Magicians: Start with a copy of your program from  previous Exercise. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians:string[] = ["Harry Houdini","David Copperfield","David","David Blaine"];
function show_magicians(magicians:string[]){
 
    for (let i = 0; i < magicians.length; i++) {
     console.log(`${magicians[i]}`);
     
    }
};
console.log(" Here the name of each magician in the array is printed below:");

show_magicians(magicians);
console.log("----------------------------------------------------------------");

function make_great(magicians:string[]){
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]="the great "+`"${magicians[i]}"`);
    }
};
console.log("Here are the great magicians:");
make_great(magicians);
console.log(" Calling show_magicians() to see that the list has actually been modified.");
show_magicians(magicians);