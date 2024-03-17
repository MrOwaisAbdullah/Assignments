"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let animal = ["Dog", "Cat", "Goat", "Cow"];
for (let pet of animal) {
    console.log(pet);
}
animal.forEach(pet => {
    console.log(`A ${pet} would be a Great Pet.`);
});
console.log("Any of these animals would make a great pet!");
