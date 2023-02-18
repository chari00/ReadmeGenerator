// function to generate markdown for README
import badges from "./badges.mjs";

function generateMarkdown(answers) {
  return `# ${answers.Title}
  
## Table of Content 
- [Description]
- [Installation]
- [Usage]
- [License]
- [Contributing]
- [Test]
- [Questions]

## [Description] 
${answers.Description}
## [Installation] 
${answers.Installation}
## [Usage]
${answers.Usage}
## [License]
${answers.License} 
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
