 //ANOTHER CLASS EXAMPLE, ENCAPSULATION PROTECTED PROPERTIES AND METHODS. ENCAPSULATION PRIVATE CLASS FIELDS AND METHODS, CHAINING METHODS   22,23,24,25


 class Account{
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
  console.log(acc1.getMovements());