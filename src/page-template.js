const runTheDamnApp = (employeeArr) => {
  let html = ``;
  

  employeeArr.forEach((employee) => { console.log(employee.getRole())
    if (employee.getRole() == "Engineer") {
      html += ` <div class="main">
        <div class="move">
           <div class="role">
               <h1> ${employee.getRole()} </h1>
           </div>
           <div class="name">
               <h2 class="role"> ${employee.getName()}</h2>
           </div>
           <div class="identification">
               <p>ID: ${employee.getId()}</p>
           </div>
           <div class="email">
               <p>Email: ${employee.getEmail()}</p>
           </div>
           <div class="github">
               <p>Github: ${employee.getGithub()}</p>
           </div>
        </div>
        </div>

       `;
    } else if (employee.getRole() == "Intern") {
      html += `
       <div class="main">
       <div class="move">
           <div>
               <h1 class="role"> ${employee.getRole()} </h1>
           </div>
           <div class="name">
               <h2 class="role"> ${employee.getName()}</h2>
           </div>
           <div class="identification">
               <p>ID: ${employee.getId()}</p>
           </div>
           <div class="email">
               <p>Email: ${employee.getEmail()}</p>
           </div>
           <div class="github">
               <p>Github: ${employee.getSchool()}</p>
           </div>
        </div>
       </div>
   `;
    } else if (employee.getRole() == "Manager") {
      html += `
   <div class="main">
   <div class="move">
           <div>
               <h1 class="role"> ${employee.getRole()} </h1>
           </div>
           <div class="name">
               <h1></h1>
               <h2 class="role"> ${employee.getName()}</h2>
           </div>
           <div class="identification">
               <p>ID: ${employee.getId()}</p>
           </div>
           <div class="email">
               <p>Email: ${employee.getEmail()}</p>
           </div>
           <div class="github">
               <p>Office number: ${employee.getOffice()}</p>
           </div>
       </div>
    </div>
    
       `;
    }
    
  })
  return html
};

const generatePage = (employeeArr) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="./Assets/style.css" />
  
      <title>Team project app</title>
  </head>
  
  <body>
  <div class="row">
  ${runTheDamnApp(employeeArr)}
  </div>
      
  
  
  
  </body>
  </html>
  
  `;
};

module.exports = generatePage;
