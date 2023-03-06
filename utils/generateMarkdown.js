// function to generate markdown for README
function generateMarkdown(data) {

  if (data.license === 'MIT') {
    data.license = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (data.license === 'Apache') {
    data.license = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (data.license === 'Mozilla') {
    data.license = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else {
    data.license = 'There is no license for this project';
  }


  return `# ${data.title}

  ${data.license}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  -
  
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
  [Github Link](https://github.com/${data.github})

  If you have any additional questions, please [contact me](mailto:${data.email})

  ---
`;
}

module.exports = generateMarkdown;
