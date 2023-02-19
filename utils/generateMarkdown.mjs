// function to generate markdown for README
import badges from "./badges.mjs";
import fs from "fs/promises";

function generateMarkdown(answers) {
  return `# ${answers.Title}
  ## Table of Content 
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Test](#Test)
- [Questions](#Questions)

## Description
${answers.Description}
## Installation 
${answers.Installation}
## Usage
${answers.Usage}
## License
This project is covered by ${answers.License}.
## Contributing
${answers.Contributing}
## Test
${answers.Test}
## Questions
For questions and comments please contact the following details:\n
E-mail: ${answers.email}\n
GitHub user Id: https://github.com/${answers.githubUserId}
  `;
}
export default generateMarkdown;
// module.exports = generateMarkdown;
