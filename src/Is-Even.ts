console.log(`hallo from Debjit`);

let IsEven = (num: number) => {

    let isEven: boolean = false;

    if (num %2 == 0) {
        isEven = true;
    }

    return isEven;
}

let num: number = 1000;

console.log(`${num} is even: "${IsEven(num)}"`);

