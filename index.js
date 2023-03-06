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
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project?',
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
  },
  {
    type: 'input',
    name: 'email',
    message: 'Contact Information (Email)?',
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// function to initialize program
const init = async () => {
    try {
      const answers = await promptUser();
      const md = generateMarkdown(answers);
      await writeFileAsync('README.md', md);
  
      console.log('Successfully wrote to a readme.md file');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
