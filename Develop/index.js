// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'descrip',
        message: 'Write a short description of your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Write a brief description of the install protocol',
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is this project used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'Apache',
            'MIT',
            'Mozilla',
            'None',
        ]
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List your contributors.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would a user test this project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
inquirer.prompt(questions)
.then((answers) => {
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')

    );
})};

// TODO: Create a function to initialize app
// Function call to initialize app

writeToFile();




