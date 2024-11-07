document.querySelector("p").remove();


let x = document.querySelector("div");

let newEle = document.createElement("div");
newEle.setAttribute("class","start");
newEle.setAttribute("title","Start Element");
newEle.setAttribute("data-value","Start");
newEle.innerHTML = "Start";


let newEle2 = document.createElement("div");
newEle2.setAttribute("class","end");
newEle2.setAttribute("title","End Element");
newEle2.setAttribute("data-value","End");
newEle2.innerHTML = "End";


x.append(newEle2);
x.prepend(newEle);