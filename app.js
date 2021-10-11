const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//FUNCTION
const printProfileData = profileDataArr => {
    // This ....
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('============');
    
    // Is the same as this 
    profileDataArr.forEach(profileItem => console.log(profileItem));

//CALL function
printProfileData(profileDataArgs);