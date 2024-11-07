let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

let itr = setOfNumbers.keys();
itr.next().value;
itr.next().value;
console.log(itr.next().value);
