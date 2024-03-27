// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT"){
    return `![Static Badge](https://img.shields.io/badge/License-MIT-brightgreen)
    `
  }
  if (license==="Apache"){
    //create badge via 
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="Apache"){
    return `[Apache](http://www.apache.org/licenses/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="Apache"){
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## License

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
