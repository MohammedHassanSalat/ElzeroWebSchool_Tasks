let l = document.images.length;
let e = document.querySelectorAll("img");

for (let i = 0; i < l; i++) {
    if (e[i].hasAttribute("alt")) {
        e[i].setAttribute("alt" , "Old")
    }
    else {
        e[i].setAttribute("alt" , "Elzero New")
    }
}

