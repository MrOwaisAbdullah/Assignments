//Writing series of conditional tests, where 5 are true and 5 are false

let myname = 'Owais';
let myAge = 23;
let myCity = 'Karachi';
let myCountry = 'Pakistan';
let x = 12;
let y = 1;



console.log("Test 1: Is myname equal to 'Owais'? I predict True.");
console.log(myname == 'Owais');

console.log("Test 2: Is myCountry equal to 'USA'? I predict False.");
console.log(myname == 'USA');

console.log("Test 3: Is myAge Greater then to 18? I predict True.");
console.log(myAge > 18);

console.log("Test 4: Is myCity equal to 'Karachi'? I predict True.");
console.log(myCity === 'Karachi');

console.log("Test 5: Is x is less than y? I predict False");
console.log(x < y);

console.log("Test 6: Is x is greater than y? I predict True");
console.log(x > y);

console.log("Test 7: Is x is equal to y? I predict False");
console.log(x === y);

console.log("Test 8: Is y is greater than myAge? I predict False");
console.log(y > myAge);

console.log("Test 9: Is 18 is less than myAge? I predict True");
console.log(18 < myAge);

console.log("Test 10: Is 10 is less than or equal to y? I predict False");
console.log(10 <= y);