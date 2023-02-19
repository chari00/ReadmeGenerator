// function to generate markdown for README
import badges from "./badges.mjs";
import fs from "fs/promises";

function generateMarkdown(answers) {
  return `# ${answers.Title}
  ## Table of Content 
- [Description](##Description)
- [Installation](##Installation)
- [Usage](##Usage)
- [License](##License)
- [Contributing](##Contributing)
- [Test](##Test)
- [Questions](##Questions)

## [Description] 
${answers.Description}
## [Installation] 
${answers.Installation}
## [Usage]
${answers.Usage}
## [License]
This is ${answers.License} license.
## [Contributing]
${answers.Contributing}
## [Test]
${answers.Test}
## [Questions]
${answers.email}
${answers.githubUserId}
  `;
}
export default generateMarkdown;
// module.exports = generateMarkdown;
