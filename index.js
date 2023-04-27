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
            console.log('Please enter your name');
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
            console.log('Please enter your GitHub username');
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
            console.log('Please enter a valid email address');
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
            console.log('Please enter a title for your Project');
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
            console.log('Please enter a description of your project.');
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
            console.log('Please provide instructions for installation.');
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
            console.log('Please provide instructions for usage of your project.');
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
            console.log('Please provide details on any tests written for your application.');
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

