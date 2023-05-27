         //ES6 CLASSES    SETTERS AND GETTERS    STATIC METHODS    13,14,15


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
          console.log(account.movements);