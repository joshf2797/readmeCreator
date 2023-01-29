const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a desription of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Instructions for installation if applicable.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for the project:',
        choices: [
            "MIT",
            "Apache 2.0",
            "GPLv2",
            "BSD 3-clause",
            "None"
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who were the contributors in this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there a test to run?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Who does the user contact if the have any questions?'
    }

]

inquirer.prompt(questions).then(answers => {
    createMD(answers);
});

const createMD = data => {
    const template =
    generateMarkdown(data);
    fs.writeFile('README.md', template, (err) => {
        err ? console.log(err) : console.log('Success!');
    });
};
