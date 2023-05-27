             //INHERITANCE BETWEEN CLASSES ES6    20

 
             class personCl{
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
               martha.calcAge();
              