const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");

const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "Please enter manager name",
    },
    {
      type: "input",
      name: "managerId",
      message: "Please enter manager employee ID",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Please enter manager email address",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Please enter manager office number",
    },
    {
        type: 'list',
        name: 'engineerOrIntern',
        message: 'Would you like to make an entry for an engineer, an intern, or would you like to finish building your team?', 
        choices: ['Engineer', 'Intern', 'Finish building team'],
    },
  ]);
  
  const engineerQuestions = () => 
    inquirer.prompt ([
        {
            type:'input',
            name: 'engineerName',
            message:'Please enter engineer name'
        },
        {
            type:'input',
            name: 'engineerId',
            message:'Please enter engineer employee ID'
        },
        
        {
            type:'input',
            name: 'engineerEmail',
            message:'Please enter engineer email'
        },
        {
            type:'input',
            name: 'engineerEmail',
            message:'Please enter engineer github username'
        },
          
    ]);

    const internQuestions = () => 
    inquirer.prompt ([
        {
            type:'input',
            name: 'internName',
            message:'Please enter intern name'
        },
        {
            type:'input',
            name: 'internId',
            message:'Please enter intern employee ID'
        },
        
        {
            type:'input',
            name: 'internEmail',
            message:'Please enter engineer email'
        },
        {
            type:'input',
            name: 'engineerSchool',
            message:'Please enter Intern university of attendance'
        },
          
    ]);

questions()
.then((answer) => {
    if (answer.engineerOrIntern == 'Engineer'){engineerQuestions()
    } else if (answer.engineerOrInter == 'Intern'){
        internQuestions()
    }
});

// .then( answer => {if (answer.engineerOrIntern == 'Engineer') {() => {engineerQuestions()}} else {() => internQuestions()}})




//   .then((data) =>
//     fs.appendFile("index.html", generatePage(data), (err) => {
//       if (err) console.log(err);
//     })
//   )
//   .then(() =>
//     console.log(
//       "Success! Please check index.html to see your completed README file!"
//     )
//   )
//   .catch((err) => console.error(err));
