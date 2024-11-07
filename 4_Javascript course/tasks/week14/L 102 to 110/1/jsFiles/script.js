let promptMsg = prompt("Print Number From - To" , "Example: 5-20");

let pro = promptMsg.split("-");

let max = pro[1];
let min = pro[0];

if (pro[0] > pro[1]) {
    max = pro[0];
    min = pro[1];
}

for (let i = min; i <= max; i++) {
    console.log(i);
}