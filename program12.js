        //INHERITANCE BETWEEN CLASSSES OBJECT CREATE    21


        const personProto={
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
          jay.calcAge();