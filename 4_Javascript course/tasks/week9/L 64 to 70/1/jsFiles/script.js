function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        // Write Your Code Here
        // Osama Mohamed => Osama M.
        // Ahmed ali => Ahmed A.
        for (let i = 0; i < zName.length; i++) {
            if (zName[i] == " ") {
                return `${zName.slice(0 , i+1)}${zName[i+1].toUpperCase()}.`
            }
        }
    }
    function ageWithMessage(zAge) {
        // Write Your Code Here
        // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
        return `Your Age Is ${zAge[0]}${zAge[1]}`
    }
    function countryTwoLetters(zCountry) {
        // Write Your Code Here
        // Egypt => You Live In EG
        // Syria => You Live In SY
        return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`
    }
    function fullDetails() {
        // Write Your Code Here
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY