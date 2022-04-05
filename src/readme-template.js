const fs = require ('fs');

const whatLicense = (licensetype) => {
  if (licensetype == 'Apache 2.0') {
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"; 
  }
  if (licensetype == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (licensetype == "Mozilla Public 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
    if (licensetype == "ISC") {
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)      ";
  }
  if (licensetype == "Creative Commons 1.0") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    }
  if (licensetype == "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)      ";
    
    }
  if (licensetype == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  }
} 



// I will have to use a destructuring method to ge the individual pieces
const generateRdMe = data => {
  let {title, description, installation, licensetype, username, emailAddress, usageInfo, contributingGuidelines, testInstructions} = data
  var liscensename = whatLicense(licensetype)
  console.log(liscensename)
    return `
# ${title}

## Description

${liscensename}

${description}

## Table of Contents
[Description](#Description) \n
[Installation](#Installation) \n 
[Usage](#Usage)  \n
[License](#License) \n  
[Contributing](#Contributing) \n  
[Tests](#Tests)  \n
[Questions](#Questions) \n    

### Instalation
* ${installation}

### Usage
* ${usageInfo}

### License
This project is covered under the ${licensetype} liscense

### Contributing
* ${contributingGuidelines}

### Tests
* ${testInstructions}
### Questions

* Github: [${username}](https://www.github.com/${username}) 
* Feel free to reach me at my email [${emailAddress}](mailto:${emailAddress})`;
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