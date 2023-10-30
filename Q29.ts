/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favfruits:string[]=["apple", "orange","banana","avacado","grapes"];

let fru:string="apple";
let fru1:string="orange";
let fru2:string="banana";
let fru3:string="grapes";
let fru4:string="avacado";
for (let i = 0; i < favfruits.length; i++) {
   if (fru===favfruits[i]) {console.log(`i really like "${fru}"`)}
else if (fru1===favfruits[i]) {console.log(`i really like "${fru1}"`)}
else if (fru2===favfruits[i]) {console.log(`i really like "${fru2}"`)}
else if (fru3===favfruits[i]) {console.log(`i really like "${fru3}"`)}
else if (fru4===favfruits[i]) {console.log(`i really like "${fru4}"`)}
   };
