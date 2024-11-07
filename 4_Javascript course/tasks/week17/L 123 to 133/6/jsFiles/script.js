let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let num = chars.filter(el => typeof el === 'number');
chars = chars.filter(el => typeof el === 'string');
chars.unshift(...num);
chars.copyWithin(0, num.length, num.length * 2);
console.log(chars);