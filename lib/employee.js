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

getName = Employee.getName()
getId = Employee.getId()
getEmail = Employee.getEmail()
getRole = () => {return 'Employee'}

}

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    
    
}

let employee1 = new Employee(data.name, data.id, data.email);

console.log(employee1)

  module.exports = Employee;