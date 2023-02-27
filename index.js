const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return "Please enter a value";
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project?',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return "Please enter a value";
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Installation steps?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the application?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Command to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'How can someone contribute to this project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'License type?',
    choices: ["Apache","MIT", "Mozilla","None"],
    default: 1
    },
  {
    type: 'input',
    name: 'github',
    message: 'Github username?',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return "Please enter a value";
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Contact Information (Email)?',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return "Please enter a value";
      }
    }
  },
];

const promptUser = () => {
  return inquirer.prompt(questions)
};

// function to initialize program
const init = async () => {
    try {
      const answers = await promptUser();

      if (answers.license === 'MIT') {
        answers.license = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      } else if (answers.license === 'Apache') {
        answers.license = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      } else if (answers.license === 'Mozilla') {
        answers.license = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      } else {
        answers.license
      }
      
      const md = generateMarkdown(answers);
  
      await writeFileAsync('README.md', md);
  
      console.log('Successfully wrote to a readme.md file');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
