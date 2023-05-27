

            //POLYMORPHISM


'use strict';
 
class Animal {
    constructor(name) {
        this.name = name;


    }
    eat() {
        console.log(`${this.name}   eat food `);

    }
}
class Alligator extends Animal {
    eat() {
        super.eat();
        console.log(`${this.name}   eat fishes `);

    }

}
const murphy = new Alligator('murphy')
murphy.eat();