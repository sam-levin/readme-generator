const fs = require ('fs');


// I will have to use a destructuring method to ge the individual pieces
const generateRdMe = data => {
  let {title, description, installation, licensetype, username, emailAddress, usageInfo, contributingGuidelines, testInstructions} = data
    return `
      # ${title}

      ## Description

      Badge

      ${description}

      ## Table of Contents

      // this is always the same

      [Description](#Description)
      [Table of Contents](#Table-of-Contents)  
      [Installation](#Installation)  
      [Usage](#Usage)  
      [License](#License)  
      [Contributing](#Contributing)  
      [Tests](#Tests)  
      [Questions](#Questions)    

      ### Instalation
      ${installation}
      
      ### Usage
      ${usageInfo}
      
      ### License
      ${licensetype}

      This project is covered under the ${licensetype} liscense
      ### Contributing
      ${contributingGuidelines}
      
      ### Tests
      ${testInstructions}
      
      ### Questions

      Github: [${username}](https://www.github.com/user/${username}) 
      Feel free to reach me at my email ${emailAddress} (this email should also be a link)`;
}; 

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/readme.md', generateRdMe(fileContent), err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

module.exports = {generateRdMe, writeFile}