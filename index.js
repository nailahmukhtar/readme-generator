const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
const init = async () => {
    console.log('hi');
    try {
      const answers = await promptUser();
  
      const html = generateMarkdown(data);
  
      await writeFileAsync('README.md', md);
  
      console.log('Successfully wrote to readme.md');
    } catch (err) {
      console.log(err);
    }
  };

// function call to initialize program
init();
