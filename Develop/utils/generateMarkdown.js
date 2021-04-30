// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if (license === 'None') {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else {
    return "- [License](#license)"
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } else {
    return "## License"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
# ${data.projectName}
## Description
 ${data.descrip}
## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
 ${renderLicenseLink(data.license)}
## Installation
 ${data.install}
## Usage
 ${data.use}
## Credits
 ${data.contributors}

${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Features
 ${data.test}

# Questions?
 # GitHub ${data.github}
 # Email ${data.email}
`;
}

module.exports = generateMarkdown;
