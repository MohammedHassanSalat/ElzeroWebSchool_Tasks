let one = document.querySelector(".one");
let two = document.querySelector(".two");

one.setAttribute("title" , "one")
two.setAttribute("title" , "two")
one.innerHTML = "One";
two.innerHTML = "Two 2";

console.log(one.getAttribute("title"));
console.log(two.getAttribute("title"));