import inquirer from "inquirer";
import fs from "fs/promises";
// import path from "path";
import generateMarkdown from "./utils/generateMarkdown.mjs";
import badges from "./utils/badges.mjs";

let question = await inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "Title",
    },
    {
      type: "input",
      message: "Write short description about your project. ",
      name: "Description",
    },
    {
      type: "input",
      message: "What software package and dependencies needed to install? ",
      name: "Installation",
    },
    { type: "input", message: "How to use the project? ", name: "Usage" },
    {
      type: "list",
      message: "License ",
      name: "License",
      choices: ["MIT", "Mozilla", "PDDL"],
    },
    {
      type: "input",
      message: "How to make contribution to this project? ",
      name: "Contributing",
    },
    {
      type: "input",
      message:
        "What are the keys to input in the command-line to run a test to the project?",
      name: "Test",
    },
    {
      type: "input",
      message: "What is your E-mail address? ",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub username? ",
      name: "githubUserId",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });

let Title = `# ${Title}`;
let Description = `## ${Description}`;
let Installation = `## ${Installation}`;
let Usage = `## ${Usage}`;
let License = `## ${License}`;
let Contributing = `## ${Contributing}`;
let Test = `## ${Test}`;
let Questions = `## ${Questions}`;

// let generateReadMe = `# ${Title}
// ## ${Description}
// ## ${Installation}
// ## ${Usage}
// ## ${License}
// ## ${Contributing}
// ## ${Test}`;
// console.log(generateReadMe);

fs.writeFile(
  "README.md",
  generateMarkdown(),
  (err) => {
    if (err) throw err;
  }

  // `# ${Title},
  // ## ${Description},
  // ## ${Installation},
  // ## ${Usage},
  // ## ${License},
  // ## ${Contributing},
  // ## ${Test},
  // ## ${Questions},`

  //   () => {}
);
