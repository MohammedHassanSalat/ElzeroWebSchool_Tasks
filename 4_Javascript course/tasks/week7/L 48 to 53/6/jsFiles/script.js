let start = 0;
let swappedName = "elZerO";
let Output = ""

for(let i = start; i < swappedName.length; i++){
    if (swappedName[i] === swappedName[i].toLowerCase()){
        Output += swappedName[i].toUpperCase()
    }
    else {
        Output += swappedName[i].toLowerCase()
    }
}

console.log(Output);

// Output
// "ELzERo"