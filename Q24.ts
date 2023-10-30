// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
console.log("• Tests for equality and inequality with strings");
let items ="fruits";
let item2 = "apple";
console.log(item2 == items);
console.log("---------------------------------------------------------------------------");
let fruits ="apple";
let fruit1 = "apple";
console.log(fruits == fruit1);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log('• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to');
let num1=Math.random();
let num2=Math.random();
console.log(`"num1"${num1}`,`"num2"${num2}`);
console.log('---------------------------------------------------------------------------');
if (num1>=num2){console.log(`1 greater than or equal "${num1}"is greater than or equal"${num2}"`)};
if (num1<=num2){console.log(`2 less than or equal    "${num1}"is less than or equal   "${num2}"`)};
if (num1>num2) {console.log(`3 greater than          "${num1}"is greater than         "${num2}"`)};
if (num1<num2) {console.log(`4 less than             "${num1}"is less than            "${num2}`)};
if (num1===num2){console.log(`5 equality             "${num1}"equal to                "${num2}"`)};
if (num1!==num2){console.log(`6 inequality           "${num1}"not equal to            "${num2}"`)};
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log(`• Tests using "and" and "or" operators`);

let greetings = "Hi";
let name = "ali";
name = name.toUpperCase();
let greet = "Hi";
let person = "ALI";

if (greetings === greet && name === person) {
  console.log(`Tests using "and" operator is correct`);
}

let gender1 = "male";
let nationality1 = "pakistani";
nationality1 = nationality1.toUpperCase();
let gender2 = "female";
let nationality2 = "PAKISTANI";
if ((gender1 === gender2) || (nationality1 === nationality2)) {
    console.log(`Tests using "or" operator is correct`);
  };
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log("• Test whether an item is in a array");

let ARRAY:string[] = ["orange","banana", "guava", "peach","apple", "apricot"];
let apple="apple";
for (let i = 0; i < ARRAY.length; i++) {
    if (apple===ARRAY[i]) {console.log(`apple is found in array on index"${i}"`)
    break};
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log("• Test whether an item is not in a array");
let found =false;
let ARRAY1:string[] = ["orange","banana", "guava", "peach", "apricot"];
let apple1="apple";
for (let i = 0; i < ARRAY1.length; i++) {
    if (ARRAY1[i]===apple1) {
    found = true;
    break
}}
if (found===false) {console.log("apple is not found on any index")}