let numbers = [1, 2, 3, 4, 5];

// Squaring each number and filtering even squares
let squaredEvenNumbers = numbers.map(num => {
    let square = num * num;
    return square % 2 === 0 ? square : null;
});

console.log(squaredEvenNumbers); // [4, 16]


let numbers1 = [1, 2, 3, 4, 5];

// Squaring each number and filtering even squares using a traditional function
let squaredEvenNumbers1 = numbers1.map(function (num) {
    let square = num * num;
    return square % 2 === 0 ? square : null;
});

console.log(squaredEvenNumbers1); // [4, 16]


let addNumbers = function (x, y) {
    return x + y;
}

console.log(addNumbers(6, 8));



function outerFunction() {
    let outerVariable = 10;
    return function () { console.log(outerVariable); };
}

let innerFunction = outerFunction();
innerFunction(); // Outputs: 10
