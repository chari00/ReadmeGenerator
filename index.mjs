import inquirer from "inquirer";
import fs from "fs/promises";
import generateMarkdown from "./utils/generateMarkdown.mjs";
import badges from "./utils/badges.mjs";

let arrAnswers = [];
// array of questions for user
let questions = await inquirer
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
    arrAnswers = answers;
  });
//funtion to diplay the license badge at the top of the readme title
await fs.writeFile("README.md", badges(arrAnswers.License));
// function to write README file
fs.appendFile("README.md", generateMarkdown(arrAnswers));
