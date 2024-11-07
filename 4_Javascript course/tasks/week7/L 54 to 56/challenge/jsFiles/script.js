/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let counter = 0

for (let i = 0; i < myAdmins.length; i++){
    if (myAdmins[i] == "Stop") {
        break
    }
    counter++
}

document.write(`<div>We Have ${counter} Admins</div> <hr>`);

for (let i = 0; i < counter; i++) {
    document.write(`The Admin For Team ${i+1} Is ${myAdmins[i]}
    <h3>Team Members:</h3>`)
    for (let j = 0 , c = 0; j < myEmployees.length; j++) {
        if (myEmployees[j].startsWith(myAdmins[i][0])) {
            document.write(`- ${++c} ${myEmployees[j]} <br>`)
        }
    }
    document.write(`<hr>`)
}

