
          // INHERITANCE BETWEEN CLASSES CONSTRUCTOR FUNCTIONS     18


const person=function(firstName,birthYear){
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
console.dir(Student.prototype.constructor);
