let main = document.querySelector(".main");
let btn = document.querySelector(".x");


function popup() {
    main.style.display = "block" ;
}

function closed() {
    main.style.display = "none" ;
}

setTimeout(popup,5000);

