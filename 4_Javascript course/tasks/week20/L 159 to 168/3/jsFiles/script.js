let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();

date.setDate(0); // set the day of the month

console.log(date);
console.log(`"Previous Month Is ${months[date.getMonth()]} And Last Day Is ${date.getDate()}"`);
