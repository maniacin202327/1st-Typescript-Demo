"use strict";
console.log(`hallo from Debjit`);
let IsEven = (num) => {
    let isEven = false;
    if (num % 2 == 0) {
        isEven = true;
    }
    return isEven;
};
let num = 1000;
console.log(`${num} is even: "${IsEven(num)}"`);
