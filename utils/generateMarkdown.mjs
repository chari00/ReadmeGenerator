// function to generate markdown for README
import badges from "./badges.mjs";
import fs from "fs/promises";
const licenseBadge = [
  {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  },
  {
    Mozilla:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    PDDL: `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`,
  },
];

function generateMarkdown(answers) {
  // function displayBadge(licenseBadge) {
  //   if (answers.License === "MIT") {
  //     licenseBadge = licenseBadge[0].MIT;
  //   }
  // }

  // console.log(answers.License);
  // (function diplayBadge(License) {
  //   if (answers.License === "MIT") {
  //     fs.writeFile(
  //       "README.md",
  //       `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  //     );
  //   }
  // });
  // displayBadge(licenseBadge);
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
