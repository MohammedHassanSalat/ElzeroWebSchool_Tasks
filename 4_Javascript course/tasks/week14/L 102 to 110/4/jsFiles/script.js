let div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        window.open("https://elzero.org/", "_self")
    }
}

let counter = setInterval(countdown, 500);