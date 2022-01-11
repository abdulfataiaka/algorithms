import containDuplicate from ".";

const firstTest = containDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(firstTest);
const secondTest = containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(secondTest);
const thirdTest = containDuplicate([1, 2, 3, 4]);
console.log(thirdTest);
const fourthTest = containDuplicate([1, 2, 3, 1]);
console.log(fourthTest);
const fifthTest = containDuplicate([4, 5, 7, 9, 10, 11]);
console.log(fifthTest);
