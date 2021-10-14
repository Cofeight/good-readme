const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
    return.inquirer.prompt({
     {
        type: "input",
        name: "name",
        message: "What is your name?",
     },
        type: "input",
        name"
    })



const generateHTML = ({name, location, github, linkedin}) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesjeet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
<h1 class="display-4"> My name is ${name}    </h1>
<p class="lead"> I am from ${location}     </p>


<h2>Contact Me</h2>
<p>Github: ${github}  </p>
<p>Linked ${linkedin}   </p>
    
</body>
</html>
`


const init = () =>{
    promptUser()

    .then((answers) => FileSystem.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log ('Successfully wrote to index.html'))
}

init()