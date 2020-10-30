/****************************************************************************
Make 5 examples of an TypeError. 
Look at the console to see what line the error is on to know what to do when 
coming in contact with that error

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1
//console.lg('hello');

// Error 2
/*
const x = 'abc';
x = 'y';
*/

// Error 3
//let x = document.getelementById('three');

// Error 4

class Dog {
    constructor(name) {
        this.name = name;
    }

    name() {
        console.log(this.name);
    }
}

dog = new Dog('spot');

setInterval(dog.name, 1000);

// Error 5