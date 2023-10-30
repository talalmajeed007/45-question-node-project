// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians: string[] = ["Harry Houdini", "David Copperfield", "David", "David Blaine"];
let magiciancopy = magicians.slice();

function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`${magicians[i]}`);
    }
}

console.log("Here are the names of each magician in the array:");

show_magicians(magicians);
console.log("----------------------------------------------------------------");

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + `${magicians[i]}`;
    }
}

console.log("Calling make_great to modify the list of magicians:");
make_great(magicians);

console.log("Here are the great magicians after modifying the list:");
show_magicians(magicians);
console.log("----------------------------------------------------------------");

console.log("Here are the original magicians without 'the Great':");
show_magicians(magiciancopy);
