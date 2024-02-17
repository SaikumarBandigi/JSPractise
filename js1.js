function getName(name) {
    return "Hi " + name;
}

let res = getName("sai");
console.log(res);



function methodFact(num) {

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * methodFact(num - 1);
}

let res1 = methodFact(5);
console.log(res1);


var greet = function (name) {
    console.log("Hi " + name);
}

greet("Bandigi");


// Function declaration
function calculateRectangleArea(length, width) {
    var area = length * width;
    return area;
}

// Function call
var result = calculateRectangleArea(5, 8);
console.log("The area of the rectangle is: " + result); // Output: The area of the rectangle is: 40


function evenOrodd(num) {

    if (num % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }

}

let res3=evenOrodd(7);
let res4=evenOrodd(8);
console.log(`${res3}`+" "+`${res4}`);

const multiply = (x, y) => x * y;

console.log(multiply(4, 5)); // Output: 20
