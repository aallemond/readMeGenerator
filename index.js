// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'Welcome to the README generator! To start, please provide your full name:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your name! You must credit yourself for your work');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('It is essential to link to your GitHub repo so users know where to find more of your work');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('If anyone has questions about your project, you must provide a way for them to contact you');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Every project must have a title. Please try again.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: "Enter your project description here:",
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('It is essential to provide a description of your project. Not sure what to include? Head to the repo of this README generator and navigate to the section "Description: Questions to Consider" under the Guidelines header for some tips on writing a quality description.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'What are the instructions for installation?',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please provide instructions for installation to ensure users have the proper software to run your program!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Instructions for usage:',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Providing instructions for usage will help users properly navigate your project. Please try again.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
    validate: contributionInput => {
        if (contributionInput) {
            return true;
        } else {
            console.log('Please provide instructions on how others can contribute to your project.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'Describe the tests written for your application and how to use them:',
    validate: testsInput => {
        if (testsInput) {
            return true;
        } else {
            console.log('Please provide instructions on how others can contribute to your project.');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmLicenses',
    message: 'Would you like to include a license?',
    default: false
},
{
    type: 'list',
    name: 'licenses',
    message: 'What license would you like to include?',
    choices: ['MIT', 'GPL', 'CC--0'],
    when: ({ confirmLicenses }) => {
        if (confirmLicenses) {
            return true;
        } else {
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile('./dist.README.md',readmeInfo);
})
.catch(err => {
    console.log(err);
});

