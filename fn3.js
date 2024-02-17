/* Generator Functions: */

function* generateCode() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const res = generateCode();

console.log(res.next().value);
console.log(res.next().value);

for (let i = 0; i < 5; i++) {
    console.log(res.next().value);
}


////////////////////////////////////////////////

function* generateNumbers() {
    yield 10;
    yield 20;
    yield 30;
}

const iterator = generateNumbers();

console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
console.log(iterator.next().value); // Output: 3
console.log(iterator.next().value); // Output: undefined




function* methodGet() {

    yield 1;

}

const resMethod=methodGet();

console.log(resMethod.next().value);
console.log(resMethod.next().value);