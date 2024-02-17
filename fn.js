function add(a, b) {
  return a + b;
}

const subResult = function sub(a, b) {
  return a - b;
}

const mulResult = (a, b) => a * b;


console.log(add(5, 6));
console.log(subResult(4, 1));
console.log(mulResult(2, 6));

(function () {
  console.log("IIFE executed");
})();



function operator(operate, a, b) {
  return operate(a, b);
}

function div(a, b) {
  return a / b;
}

console.log(operator(div, 2, 0));