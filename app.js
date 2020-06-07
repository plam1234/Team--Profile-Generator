// Dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your role?",
      name: "role",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your school?",
      name: "school",
    },
    {
      type: "input",
      message: "What is your Github?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your office number?",
      name: "officeNumber",
    },
  ])

  .then(function (response) {
    const employees = [];
    if (response.role === "Manager") {
      const newManager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(newManager);
    } else if (response.role === "Engineer") {
      const newEngineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(newEngineer);
    } else if (response.role === "Intern") {
      const newIntern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(newIntern);
    }
    fs.writeFile(outputPath, render(employees), () => console.log("done!"));
  });
