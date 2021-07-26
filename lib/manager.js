const Employee = require('./employee.js')



class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole(){return 'Manager'}
    getOffice(){return this.officeNumber}
    
}

// let Manager1 = new Manager('james', 4, 'manager.email', 45 )
// console.log(Manager1.officeNumber)
// console.log(Manager1.getRole())
// console.log(Manager1.getName())
// console.log(Manager1.getId())

module.exports = Manager