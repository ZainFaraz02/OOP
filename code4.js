           //CODING CHALLENGE 4
           class carCl{

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
            
            console.log(MG.speedUS);