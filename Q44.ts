// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let items0:string[] = ["jam", "apple","banana."];
let items1:string[] = ["youngs spread", "chicken","lettuce."];
let items2:string[] = ["beef patty", "cucumber slices","lettuce."];
function sandwitc(items:string[]) {
    console.log(`summary of sandwitch:
ingredients = ${items}`);
    }
    sandwitc(items0);
    console.log("---------------------------------------------------------");
    sandwitc(items1);
    console.log("---------------------------------------------------------");
    sandwitc(items2);
//     let items0: string[] = ["jam", "apple", "banana"];
// let items1: string[] = ["youngs spread", "chicken", "lettuce"];
// let items2: string[] = ["beef patty", "cucumber slices", "lettuce"];

// function sandwich(items: string[]) {
//     console.log(`Summary of the sandwich:
// Ingredients: ${items.join(", ")}`);
// }

// sandwich(items0);
// sandwich(items1);
// sandwich(items2);
