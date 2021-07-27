


const runTheDamnApp = employeeArr.forEach(employee => { 
    if (employee.getRole() == 'Engineer'){
   return ` <div class="main">
           <div class="role">
               <h1> ${employee.getRole()} </h1>
           </div>
           <div class="name">
               <h1>{data.name}</h1>
               <h2> ${employee.getName()}</h2>
           </div>
           <div class="identification">
               <p>ID: ${employee.getId()}</p>
           </div>
           <div class="email">
               <p>Email: ${employee.getEmail()}</p>
           </div>
           <div class="github">
               <p>Github: </p>
           </div>
       </div>
       `
} else if (employee.getRole() == 'intern'){
   return `
       <div class="main">
           <div class="role">
               <h1> ${employee.getRole()} </h1>
           </div>
           <div class="name">
               <h1>{data.name}</h1>
               <h2> ${employee.getName()}</h2>
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
   `
} else if (employee.getRole() == 'Manager'){
   return `
   <div class="main">
           <div class="role">
               <h1> ${employee.getRole()} </h1>
           </div>
           <div class="name">
               <h1>{data.name}</h1>
               <h2> ${employee.getName()}</h2>
           </div>
           <div class="identification">
               <p>ID: ${employee.getId()}</p>
           </div>
           <div class="email">
               <p>Email: ${employee.getEmail()}</p>
           </div>
           <div class="github">
               <p>Office numer: ${employee.getOffice()}</p>
           </div>
       </div>
       `
}
    }
);





const generatePage = (employeeArr) => { 
    // console.log(employeeArr)
    employeeArr.forEach(employee => console.log(employee.getRole()))
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
       
    



</body>
</html>

`
}


module.exports = generatePage; 