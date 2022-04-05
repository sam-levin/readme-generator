const { write } = require('fs');
const inquirer = require('inquirer');
const { reduceRight } = require('lodash');
const { title } = require('process');
const {writeFile} = require("./src/readme-template")




const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your Title!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your Title!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please write out installation instructions (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your Title!")
                    return false;
                }
            }
        },
        {
          type: 'checkbox',
          name: 'licensetype',
          message: 'What license did you license this project with? (Choose one)',
          choices: ['Apache 2.0', 'MIT', 'Mozilla Public 2.0', 'Creative Commons 1.0', 'GNU GPL v3', 'IBM', 'ISC']
        },
        {
          type: 'input',
          name: 'username',
          message: 'What is your Github Username? (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log("Please enter your Username!")
                  return false;
              }
          }
        },
        {
          type: 'input',
          name: 'emailAddress',
          message: 'What is your email address? (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log("Please enter your Title!")
                  return false;
              }
          }
        },
        {
          type: 'input',
          name: 'usageInfo',
          message: 'Please enter usage information? (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log("Please enter your Title!")
                  return false;
              }
          }
        },
        {
          type: 'input',
          name: 'contributingGuidelines',
          message: 'Please enter contributing guidelines (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log("Please enter your Title!")
                  return false;
              }
          }
        },
        {
          type: 'input',
          name: 'testInstructions',
          message: 'Please enter testing instructions? (Optional)',
        },
    ])
 
}


promptUser()
    .then(answers => writeFile(answers))
    