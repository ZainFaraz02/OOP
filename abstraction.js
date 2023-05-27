'use strict';

                 //abstraction
//hide details and just show essential



function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;
    let calculateFinalSalary = function () {
        let finalSalary = baseSalary + monthlyBonus;
        console.log('final salaryis :' + finalSalary);
    }


    this.EmpDetails = function () {
        console.log(`Name : ${this.name} | age : ${this.age} `);
        calculateFinalSalary();

    }

}

let emp = new Employee('john', 30, 20000);
emp.EmpDetails();