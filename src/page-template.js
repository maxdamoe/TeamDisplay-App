
const generatePage = () => {
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
        
    

${employeeArr.foreach(employee => { 
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
                <p>Github: ${employee.getGithub()}</p>
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
                <h1> ${data.manager1.getRole()} </h1>
            </div>
            <div class="name">
                <h1>{data.name}</h1>
                <h2> ${data.manager1.getName()}</h2>
            </div>
            <div class="identification">
                <p>ID: ${data.manager1.getId()}</p>
            </div>
            <div class="email">
                <p>Email: ${data.manager1.getEmail()}</p>
            </div>
            <div class="github">
                <p>Github: ${data.manager1.getOffice()}</p>
            </div>
        </div>
        `
}
}) }



</body>
</html>

`
}


module.exports = generatePage; 