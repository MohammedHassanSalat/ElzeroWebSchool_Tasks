/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);

/* 
    [++a] [+] [+b++] [+] [+c++] [-] [+a++]

    [++a]
    - value : 11
    - explain: pre increment

    [+]
    - explain: add operator

    [+b++]
    - value : 20
    - explain: post increment

    [+]
    - explain: add operator

    [+c++]
    - value : 80
    - explain: post increment

    [-]
    - explain: sub operator

    [+a++]
    - value : 11
    - explain: post increment
*/


console.log(++a + -b + +c++ - -a++ + +a);
/*
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
    [++a]
    - value : 13
    - explain: pre increment

    [+]
    - explain: add operator

    [-b]
    - value : -21
    - explain: no increment

    [+]
    - explain: add operator

    [+c++]
    - value : 81
    - explain: post increment

    [-]
    - explain: sub operator

    [-a++]
    - value : -13
    - explain: post increment

    [+]
    - explain: add operator

    [+a]
    - value : 14
    - explain: no increment
*/ 

console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
    [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

    [--c]
    - value : 81
    - explain: pre decrement

    [+]
    - explain: add operator

    [+b]
    - value : 21
    - explain: no increment

    [+]
    - explain: add operator

    [--a]
    - value : 13
    - explain: pre decrement

    [*]
    - explain: multiply operator

    [+b++]
    - value : 21
    - explain: post increment

    [-]
    - explain: sub operator

    [+b]
    - value : 22
    - explain: no increment

    [*]
    - explain: multiply operator

    [a]
    - value : 13
    - explain: no increment

    [+]
    - explain: add operator

    [--a]
    - value : 12
    - explain: pre decrement

    [-]
    - explain: sub operator

    [+true]
    - value : 1
    - explain: true = 1
*/

/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d*e); // 2000
console.log(-d + ++f + ++e * ++g); // 173