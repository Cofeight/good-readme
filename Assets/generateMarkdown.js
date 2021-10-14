function licensing(argument) {


    switch (argument) {
        case 'Eclipse':
            return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
            break;
        case "MIT":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            break;
        case "GNU":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            break;
    }

}

function generateMarkdown(data) {
    return `

# ${licensing(data.license)};

# ${data.title}


## Description
    ${data.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Contributions](#contributions)
* [Questions](#questions)


## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License
    ${data.license}

## Tests
    ${data.tests}
    
## Contributions
    ${data.contributions}


## Questions
    With any questions, please contact the owner of this project by following the links below.

## Contact Info

## ${data.email !== null ? "[" + data.email + "](mailto:" + data.email + ")" : "This user has a private email."}

## ${data.github !== null ? "[" + data.github + "](https://github.com/" + data.github + ")" : "This user has a private github."}
    `;
}

module.exports = generateMarkdown;