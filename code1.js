          //CODING CHALLENGE 1      12


          const car =function(make,speed){
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
          mercedes.accelerate();