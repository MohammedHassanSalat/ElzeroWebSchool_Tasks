let elements = document.querySelector('[name="elements"]');
let texts = document.querySelector('[name="texts"]');
let type = document.querySelector('[name="type"]');
let submitForm = document.querySelector("form");
let results = document.querySelector(".results");

submitForm.onsubmit = (e) => {
    e.preventDefault();
    results.innerHTML = "";
    addItems();
};

function addItems() {
    let elemNums = elements.value;
    let textVal = texts.value;
    let typeVal = type.value;

    for (let i = 1; i <= elemNums; i++) {
        results.innerHTML += `
            <${typeVal} class="box" title="Element" id="id-${i}">${textVal}</${typeVal}>
        `;
    }
}

