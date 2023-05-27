

             //CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR     8


/*'use strict' ;
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
 console.dir(x => x+1);*/


          //CODING CHALLENGE 1      12


/*const car =function(make,speed){
  this.make=make;
  this.speed=speed;
};

car.prototype.accelerate=function(){
  this.speed+=10;
  console.log(`${this.make} is going at ${this.speed} km/`)
};
car.prototype.brake=function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h)`);
};

const bmw=new car('BMW', 120);
const mercedes=new car('Mercedes', 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();*/


           //ES6 CLASSES    SETTERS AND GETTERS    STATIC METHODS    13,14,15


/*class personCl{
  constructor(fullName,birthYear){
    this.fullName=fullName;
    this.birthYear=birthYear;
  }
  calcAge(){
    console.log(2023 -this.birthYear);
  }
  greet(){
    console.log(`hey ${this.fullName}`);
  }
  get age(){
    return 2023 - this.birthYear;
  }
  set fullName(name){
    console.log(name);
    if(name.includes(' ')) this._fullName=name;
    else alert(`${name} is not a full name!`);
  }
get fullName(){
  return this._fullName;
}
static hey(){
  console.log('Hey there ');
    console.log(this);
}
}
const jasmine=new personCl(`jasmine davis`, 1999);
console.log(jasmine);
jasmine.calcAge();
console.log(jasmine.age);

console.log(jasmine.__proto__ === personCl.prototype);

jasmine.greet()

const walter=new personCl('Walter davis',1965);

personCl.hey(); 

const account={
  owner: 'Zain',
  movements: [200,530,120,300],

  get latest(){
    return this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest=50;
console.log(account.movements);*/


           //OBJECT CREATE    16


/*const personProto={
  calcAge(){
    console.log(2023 -this.birthYear);
  }, 
  init(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
  } 
};

const steven=Object.create(personProto);
console.log(steven);
steven.name='Steven';
steven.birthYear=2002;
steven.calcAge(); 

console.log(steven.__proto__=== personProto);

const sarah=Object.create(personProto);
sarah.init('sarah',1979);
sarah.calcAge();*/


               //CODING CHALLLENGE 2    17


/*class carCl{

 constructor(make,speed){
  this.make=make;
  this.speed=speed;
}

accelerate(){
  
  this.speed+=10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}
brake(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}
get speedUS(){
  return this.speed / 1.6;
}
set speedUS(speed){
  this.speed=speed*1.6;
}
}
const ford =new carCl('ford',120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS=50;
console.log(ford);*/


             // INHERITANCE BETWEEN CLASSES CONSTRUCTOR FUNCTIONS     18


/*const person=function(firstName,birthYear){
  this.firstName=firstName;
  this.birthYear=birthYear;
};
person.prototype.calcAge=function(){
  console.log(2023 - this.birthYear);
};
const Student=function(firstName,birthYear,course){
  this.firstName=firstName;
  this.birthYear=birthYear;
  this.course=course;
};

Student.prototype=Object.create(person.prototype);


Student.prototype.introduce=function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}}`)
};
const mike=new Student('Mike',2020,'computer science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof person);
console.log(mike instanceof Object);

Student.prototype.constructor=Student;
console.dir(Student.prototype.constructor);*/


            //CODING CHALLENGE 3    19


/*const car =function(make,speed){
  this.make=make;
  this.speed=speed;
};

car.prototype.accelerate=function(){
  this.speed+=10;
  console.log(`${this.make} is going at ${this.speed} km/`)
};
car.prototype.brake=function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h)`);
};

const EV=function(make,speed,charge){
 car.call(this, make,speed);
 this.charge=charge;
};

EV.prototype=Object.create(car.prototype);

EV.prototype.chargeBattery=function(chargeTo){
  this.charge=chargeTo;
}

EV.prototype.accelerate=function(){
  this.speed+=20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed}km/h, with a charge of${this.charge}`)
}

const tesla = new EV('Tesla',120,23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();*/


              //INHERITANCE BETWEEN CLASSES ES6    20

 
/*class personCl{
  constructor(fullName,birthYear){
    this.fullName=fullName;
    this.birthYear=birthYear;
  }
  calcAge(){
    console.log(2023 -this.birthYear);
  }
  greet(){
    console.log(`hey ${this.fullName}`);
  }
  get age(){
    return 2023 - this.birthYear;
  }
  set fullName(name){
    console.log(name);
    if(name.includes(' ')) this._fullName=name;
    else alert(`${name} is not a full name!`);
  }
get fullName(){
  return this._fullName;
}
static hey(){
  console.log('Hey there ');
    console.log(this);
}
}
 class StudentCl extends personCl{
  constructor(fullName,birthYear,course){
    super(fullName,birthYear);
    this.course=course;
  }
  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}}`)
 }
 calcAge(){
  console.log(`Im of${2023 -this.birthYear} years old,but as a student I feel more like ${2023 - this.birthYear+10}`);
 }
 }
 const martha=new StudentCl('Martha Jones',2012,'computer science');
 martha.introduce();
 martha.calcAge();*/


         //INHERITANCE BETWEEN CLASSSES OBJECT CREATE    21


/*const personProto={
  calcAge(){
    console.log(2023 -this.birthYear);
  }, 
  init(firstName,birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
  }, 
};

const steven=Object.create(personProto);

const StudentProto=Object.create(personProto)
StudentProto.init=function(firstName,birthYear,course) {
personProto.init.call(this,firstName,birthYear);
this.course=course;
};
StudentProto.introduce=function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
};
const jay=Object.create(StudentProto);
jay.init('JAY', 2010, 'computer science');
jay.introduce();
jay.calcAge();*/


   //ANOTHER CLASS EXAMPLE, ENCAPSULATION PROTECTED PROPERTIES AND METHODS. ENCAPSULATION PRIVATE CLASS FIELDS AND METHODS, CHAINING METHODS   22,23,24,25


/*class Account{
  locale=navigator.language;
  #movements=[];
  #pin;
  constructor(owner,currency,pin){
    this.owner=owner;
    this.currency=currency;
    this.#pin=pin;

    

    console.log(`Thanks for opening an account,${owner}`);
  }
  getMovements(){
    return this.#movements;
    return this;
  }
  deposit(money){
    this.#movements.push(money)
    return this;
  }
  withdraw(money){
    this.deposit(-money)

    return this;
  }
  _approveLoan(money){
    return true;
  }
  requestLoan(money){
    if(this._approveLoan(money)){
      this.deposit(money)
      console.log(`Loan appoved`);
      return this;
    }
  }
  static helper(){
    console.log('Helper');
  }
}              
const acc1 = new Account('saad','rs',4444 );
acc1.deposit(3000);
acc1.withdraw(1500);
acc1.requestLoan(10000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();



acc1.deposit(3000).deposit(5000).withdraw(3500).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());*/

             
            //CODING CHALLENGE 4
/*class carCl{

constructor(make,speed){
  this.make=make;
  this.speed=speed;
}
             
accelerate(){
               
  this.speed+=10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}
brake(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
  return this;
}
get speedUS(){
  return this.speed / 1.6;
}
set speedUS(speed){
  this.speed=speed*1.6;
  }
}           

class EVCl extends carCl{
  #charge;
constructor(make,speed,charge){
  super(make,speed);
  this.#charge=charge;
 };
 
 chargeBattery(chargeTo){
   this.#charge=chargeTo;
   return this;
 }
 
 accelerate(){
   this.speed+=20;
   this.#charge--;
   console.log(`${this.make} is going at ${this.speed}km/h, with a charge of${this.#charge}`)
 
   return this;
   }
}

const MG=new EVCl('MG',120,23);
console.log(MG);
MG.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(MG.speedUS);*/