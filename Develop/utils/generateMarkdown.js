// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT"){
    //badges created with shields.io
    return `![Static Badge](https://img.shields.io/badge/License-MIT-brightgreen)
    `
  }
  if (license==="Apache"){
    return `![Static Badge](https://img.shields.io/badge/License-Apache-blue)
    `
  }
  if (license==="none"){
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="MIT"){
    return `[MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`
  }
  if (license==="Apache"){
    return `[Apache](http://www.apache.org/licenses/)`
  }
  if (license==="none")
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="MIT"){
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if (license==="Apache"){
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if (license==="none"){
    return ``
  }
}

// TODO: Add function to create table of contents for README

function createTableOfContents(tableOfContents) {
  if (tableOfContents==="Yes"){
    return `[Installation](#installation) / [Usage](#usage) / [Credits](#credits) / [License](#license)`
  }
  if (tableOfContents==="No"){
    return ``
    //Actually.... lets have if yes return ## table of contents since no wont need that header
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  ${createTableOfContents(data.tableOfContents)}

  ## Installation

  ${data.installation}

  ## License

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
