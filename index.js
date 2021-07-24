const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');


let employee = class Employee {
    constructor (name, ID, github, officeNumber){
        this.name = name
        this.id = ID
        this.github = github
        this.officeNumber = officeNumber
    }
}


const intern = class Intern {
    constructor()
}

let intern1 = new Intern(school)