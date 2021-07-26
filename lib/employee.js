// function Employee(name = '', id = '', email = ''){
//     this.name = name; 
//     this.id = id
//     this.email = email
//     this.
//     Employee.getName()
//     Employee.getId()
//     Employee.getEmail()
//     Employee.getRole()
// }
 

class Employee{

    constructor(name, id, email){
    this.name = name; 
    this.id = id
    this.email = email
   
}

getName(){return this.name}
getId(){return this.id}
getEmail(){return this.email}
getRole(){return 'Employee'}

}

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber){
//         super(name, id, email)
//         this.officeNumber = officeNumber
//     }
    

// }

// const employee1 = new Employee('jef', 5,  'pussy@pussy.com');
// const employee2 = new Employee('jon', 4, 'jon@jon.com')

// console.log(employee1, employee2)

  module.exports = Employee;