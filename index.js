const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'contents',
        message: 'What is your table of contents?',
        if {}
    },
    {
        type: 'input',
        name: 'install',
        message: 'Instructions for installation if applicable.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for the project:',
        choices: [
            "ICS",
            "MIT",
            "Mozilla",
            "GNU",
            "Apache",
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
    console.log(`The title of my project is ${answers.title} and my email is ${answers.description}`)
});
// this is a function called createMD that creates the README and holds the template layout of that README
const createMD = data => {
    const template =`# ${data.title}
    
## Description 
${data.description}

<br><br>

## Table of Contents
1. ${data.contents}
`

    console.log(template);
    fs.writeFile('README.md' , template, err => {
        err ? console.log(err) : console.log("Success!")
    })
}