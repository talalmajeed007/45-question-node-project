const places:string[] =['muree','chitral','balochistan','peshawar'];

console.log(`${places} Original array`);// Original array
const sortedarray=places.slice().sort();
console.log(`${sortedarray} Sorted array`); // Sorted array
console.log(`${places} Original array, not sorted`);// Original array, not sorted
const revsortedarray=sortedarray.slice().reverse();
console.log(`${revsortedarray} Reversed sorted array`);// Reversed sorted array
console.log(`${places} Original array, not sorted`);// Original array, not sorted
const revplaces=places.reverse(); 
console.log(`${revplaces} revesed `);//revesed original array
const rerevplaces=revplaces.reverse();
console.log(`${rerevplaces} rerevesed  back to original array`);//rerevesed  back to original array
const sorted=places.sort();
console.log(`${sorted} Sorted`); // Sorted array
const revsorted=sortedarray.reverse();
console.log(`${revsorted} Reversed`);// Reversed sorted array
