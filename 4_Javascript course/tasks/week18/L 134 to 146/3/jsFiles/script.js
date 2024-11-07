let phone = "+(995)-123 (4567)";

let phoneReg = /\+\(\d+\)-\d+ \(\d+\)/;

console.log(phone.match(phoneReg));
