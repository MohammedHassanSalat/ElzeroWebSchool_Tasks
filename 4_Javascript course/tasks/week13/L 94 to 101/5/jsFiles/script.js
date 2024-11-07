let d = document.querySelector("div");
let sp = document.querySelector("span");
let p = document.querySelector("p");
let a = document.querySelector("article");
let se = document.querySelector("section");

d.onclick = () => {
    console.log(`this is ${d.nodeName}`);
}
sp.onclick = () => {
    console.log(`this is ${sp.nodeName}`);
}
p.onclick = () => {
    console.log(`this is ${p.nodeName}`);
}
a.onclick = () => {
    console.log(`this is ${a.nodeName}`);
}
se.onclick = () => {
    console.log(`this is ${se.nodeName}`);
}