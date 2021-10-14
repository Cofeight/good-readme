// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//inquirer 3rd party app that is an asynchronious function
const fs = require("fs");
//File Structure is a module that has numerous functionalities
//in this example, it will create a markdown file
const generateMarkdown = require("./Assets/generateMarkdown");
//this function returns the string within generateMarkdown

// TODO: Create an array of questions for user input
const askQuestions =
 () => inquirer.prompt( [
    //These are the questions called to the user via inquirer
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe this project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are your installation instructions?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is this project used?",
        name: "usage"
    },
    {
        type: "list",
        message: "How is this project licensed?",
        name: "license",
        choices: ['Eclipse', 'MIT', 'GNU']
    },
    {
        type: "input",
        message: "Are there any tests that you have developed for this application?",
        name: "tests"
    },
    {
        type: "input",
        message: "Do you have any contributions to add?",
        name: "contributions"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }
]);


// TODO: Create a function to initialize app
const init = () =>{ 
    askQuestions().then((answers) => fs.writeFile('README.md', generateMarkdown (answers), (err) => {
        if (err) throw err;
    }))
    .then(() => console.log ('Successfully generated a README.md'))
}


// Function call to initialize app
init();