function Person(name, age) {

    this.name = name;
    this.age = age;


    this.sayHello = function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    };
}


var person1=new Person("Sai",25);
var person2=new Person("Prashanth",23);



console.log(person1.name);
console.log(person2.name);


person1.sayHello();
person2.sayHello();

