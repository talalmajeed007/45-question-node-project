// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt( text:string,size= "large") {
    console.log(`The size of the shirt is ${size} and the message printed on shirt is "${text}".`)}
    
make_shirt("i love typescript");
console.log("----------------------------------------------");

function make_shirt1( size:string,text="i love typescript") {
    console.log(`The size of the shirt is ${size} and the message printed on shirt is "${text}".`)}
    
make_shirt1("large");
console.log("----------------------------------------------");

function make_shirt2(size:string, text="i love typescript") {
    console.log(`The size of the shirt is ${size} and the message printed on shirt is "${text}".`)}
    
make_shirt2("large");
console.log("----------------------------------------------");
function make_shirt0(size:number, text:string) {
    console.log(`The size of the shirt is ${size}and the message printed on shirt is "${text}".`)}
    
make_shirt0(12,"baap na ban");
