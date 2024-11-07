let elementDiv = document.querySelector("div");
let InputValue = document.querySelector("input");

InputValue.oninput = () => {
    elementDiv.innerHTML = `${InputValue.value} USD Dollar = ${(InputValue.value * 15.6).toFixed(2)} Egyptian Pound`
}


