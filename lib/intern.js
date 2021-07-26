const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }
    getRole(){return 'Engineer'}
    getSchool(){return this.school}
    
}

module.exports = Intern