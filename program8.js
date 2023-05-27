

             //CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR     8


 'use strict' ;
 const person = function (firstName, birthyear) {
      // instance properties
       this.firstName = firstName;
       this.birthyear = birthyear;
};
             
const zain = new person('zain', 2004);
  console.log(zain);
        const ikram = new person('ikram', 1995);
  console.log(ikram);
             
  console.log(ikram instanceof person);
             
person.hey=function(){
  console.log('Hey there ');
  console.log(this);
 }
person.hey();
             
             
                        //PROTOTYPES    10
                  
             
  console.log(person.prototype);
person.prototype.calcAage = function () {
  console.log(2023 - this.birthyear)
};
             
 zain.calcAage();
 ikram.calcAage();
             
  console.log(ikram.__proto__.__proto__);
             
  console.log(zain.__proto__ === person.prototype);
  console.log(person.prototype.isPrototypeOf(zain))
  console.log(person.prototype.isPrototypeOf(ikram))
             
             //protypeoflinkedobjects
             
person.prototype.species = 'homo sapiens';
 console.log(ikram.species, zain.species);
             
  console.log(ikram.hasOwnProperty('firstName'));
  console.log(ikram.hasOwnProperty('species'));
             
             
                      //PROTOTYPAL INHERITANCE ON BUILT IN OBJECTS     11
             
             
  console.log(zain.__proto__);
             
  console.log(zain.__proto__.__proto__);
  console.log(zain.__proto__.__proto__.__proto__);
             
  console.dir(person.prototype.constructor);
             
  const arr  = [3,6,6,5,6,9,9];
  console.log(arr.__proto__);
  console.log(arr.__proto__ === Array.prototype);
             
  console.log(arr.__proto__.proto__);
  Array.prototype.unique=function(){
     return [...new Set(this)];
 };
   console.log(arr.unique());
             
    const h1= document.querySelector('h1');
    console.dir(x => x+1);
             