// TODO: Include packages needed for this application

const{prompt} = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
// README needs: Description, Table of Contents, Installation, Usage,
// License, Contributing, Tests, and Questions
//
// Include questions on: README title, choosing a license,
// adding a github username, email address
//
const questions = [
    {
        type:"input",
        name:"file_name",
        message:"What would you like your file name to be?"
    },
    {
        type:"list",
        name:"tableOfContents",
        message:"Would you like a table of contents?",
        choices:["Yes", "No"]
    },
    {
        type:"input", 
        name:"title",
        message: "What is the title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Please describe your project."
    },
    {
        type:"input",
        name:"installation",
        message:"Please provide step-by-step installation instructions for your project."
    },
    {
        type:"input",
        name:"usage",
        message:"Please provide instructions for using your project"
    },
    {
        type:"input",
        name:"credits",
        message:"Please list any collaborators on your project, along with links to their GitHub profiles"
    },
    {
        type:"list",
        name:"license",
        message:"Which license will you be using?",
        choices:["MIT", "Apache", "none"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err){console.log(err)}
        console.log("README created")
    })
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then((answers)=>{console.log(answers)
     writeToFile(`./${answers.file_name}.md`, generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
