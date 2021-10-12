//required to use the fs module
const fs = require('fs');

//require stmt to access the generatePage() function in page-template.js
const generatePage = require('./src/page-template.js');

console.log(process.argv);
const profileDataArgs = process.argv.slice(2, process.argv.length);

//extract command-line argumands and store them in variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error (err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

// //FUNCTION
// const printProfileData = profileDataArr => {
//     // This ....
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('============');

//     // Is the same as this 
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// //CALL function
// printProfileData(profileDataArgs);