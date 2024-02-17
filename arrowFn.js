const resSimple = () => "sai";

const resAdd = (a, b) => a + b;


let arrowFunction = (param1, param2) => {
    let sum = param1 + param2;
    let product = param1 * param2;
    console.log("Sum:", sum);
    console.log("Product:", product);
    return sum + product;
  };
  

 arrowFunction(3, 4);

