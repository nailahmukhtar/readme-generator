// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  
  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}


  ## License
  ${data.license}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.test}
  

  ## Questions
  ![Github Link](https://github.com/${data.github})

  If you have any additional questions, please [contact me](mailto:${data.email})

  ---
`;
}

module.exports = generateMarkdown;
