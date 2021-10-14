function licensing(argument) {


    switch (argument) {
        case 'Eclipse':
            return `[![License](https://img.shields.io/dge///License-EPL%201.0-red.svg)](https://opensource.org/licenses///L-1.0)`;
            break;
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org///licenses/MIT)`;
            break;
        case "GNU":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org///licenses/gpl-3.`;
            break;
    }

}

function generateMarkdown(data) {
    return `

# ${licensing(data.license)};

# ${data.title}


## Description of Project
    ${data.description}

## Table of Contents

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Tests](#tests)
    * [Contributions](#contributions)
    * [Questions](#questions)


## Installation Instructions
    ${data.installation}

## Usage Information
    ${data.usage}

## License
    ${data.license}

## Test Instructions
    ${data.tests}
    
## Contribution Guidelines
    ${data.contributions}


## Questions
    With any questions, please contact the owner of this project by following the links below.

## Contact Info

## ${data.email !== null ? "[" + data.email + "](mailto:" + data.email + ")" : "This user has a private email."}

## ${data.github !== null ? "[" + data.github + "](linkto:" + data.github + ")" : "This user has a private github."}
    `;
}

module.exports = generateMarkdown;