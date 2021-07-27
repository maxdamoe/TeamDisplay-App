const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");



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
  ]);

const newEntry = () =>
  inquirer.prompt([
    {
      type: "list",
      name: "engineerOrIntern",
      message:
        "Would you like to make an entry for an engineer, an intern, or would you like to finish building your team?",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  ]);

const engineerQuestions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please enter engineer name",
    },
    {
      type: "input",

      name: "engineerId",
      message: "Please enter engineer employee ID",
    },

    {
      type: "input",
      name: "engineerEmail",
      message: "Please enter engineer email",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "Please enter engineer github username",
    },
    {
      type: "list",
      name: "another",
      message: "Do you want to add another employee?",
      choices: ["yes", "no"],
    },
  ]);

const internQuestions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please enter intern name",
    },
    {
      type: "input",
      name: "internId",
      message: "Please enter intern employee ID",
    },

    {
      type: "input",
      name: "internEmail",
      message: "Please enter intern email",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Please enter intern university of attendance",
    },
    {
      type: "list",
      name: "another",
      message: "Do you want to add another employee?",
      choices: ["yes", "no"],
    },
  ]);

questions()
.then(async (managerInfo) => {
    const employeeArr = [];
  employeeArr.push( new Manager(
    managerInfo.managerName,
    managerInfo.managerId,
    managerInfo.managerEmail,
    managerInfo.managerOfficeNumber
  ));

  let createNewEmployee = "yes";

  

  while ((createNewEmployee == "yes" && employeeArr.length <= 5)) {
    await newEntry().then(async (employeeType) => {
      if (employeeType.engineerOrIntern == "Engineer") {
        await engineerQuestions().then((engineer) => {
          employeeArr.push(
            new Engineer(
              engineer.engineerName,
              engineer.engineerId,
              engineer.engineerEmail,
              engineer.engineerGithub
            )
          );
          if (engineer.another != 'yes') {
              createNewEmployee = 'no'
              return;
          }
        });
      } else if (employeeType.engineerOrIntern == "Intern") {
        await internQuestions().then((intern) => {
          employeeArr.push(
            new Intern(
              intern.internName,
              intern.internId,
              intern.internEmail,
              intern.internSchool
            )
          );
          if (intern.another != "yes") {
            createNewEmployee = "no";
            return;
          }
        });
      } else if (employeeType.engineerOrIntern == 'Finish building team'){ 
          createNewEmployee = 'no';
          return;
    }
    });
  }
  
   fs.appendFile('index.html', generatePage(employeeArr), (err) => { 
        if (err)  
        console.log(err); 
        });

})
// .then((data) => fs.appendFile('index.html', generatePage(data), (err) => { 
//     if (err)  
//     console.log(err); 
//     }));

//   .catch((err) => console.error(err));



  
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
// .then((answer) => {

//     console.log(manager1)
//     if (answer.engineerOrIntern == 'Engineer'){
//         console.log(answer.engineerOrIntern)
//         engineerQuestions()
//     } else if (answer.engineerOrIntern == 'Intern'){
//         internQuestions()
//     }
//     generatePage(manager1, )
// })

// .then( answer => {if (answer.engineerOrIntern == 'Engineer') {() => {engineerQuestions()}} else {() => internQuestions()}})