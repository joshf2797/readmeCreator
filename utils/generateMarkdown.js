let renderLicenseBadge = (license) => {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPLv2':
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      case 'BSD 3-clause':
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        default:
          return '';
    }
  };
  
  
  let renderLicenseLink = (license) => {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPLv2':
        return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      case 'BSD 3-clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return '';
    }
   };

function generateMarkdown(data) {
    const licenseLink = renderLicenseLink(data);
    const licenseBadge = renderLicenseBadge(data.license);


    return `# ${data.title}
  ${data.description}
  ## Table of Contents
  ---
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ---
  ${data.installation}
  ## Usage
  ---
  ${data.usage}
  ## License
  ${data.project} is licensed under the: 
  
  ${licenseBadge}${licenseLink}
  ---
  ${licenseBadge}
  ## Contributing
  ---
  ${data.contributing}
  ## Tests
  ---
  ${data.tests}
  ## Questions
  ---
  https://github.com/${data.questions}/
  ${data.questions}
  `;
  };
  
  module.exports = generateMarkdown;