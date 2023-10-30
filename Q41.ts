// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians:string[] = ["Harry Houdini","David Copperfield","David","David Blaine"];
function show_magicians(magicians:string[]){
 
    for (let i = 0; i < magicians.length; i++) {
     console.log(`"${magicians[i]}"`);
     
    }
}
console.log(" Here the name of each magician in the array is printed below");

show_magicians(magicians)
