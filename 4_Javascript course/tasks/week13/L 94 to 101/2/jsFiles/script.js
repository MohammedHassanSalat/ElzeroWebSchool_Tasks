let inputValueAdd = document.querySelector(".classes-to-add");
let inputValueRemove = document.querySelector(".classes-to-remove");
let classNames = document.querySelector(".classes-list");
let span = document.createElement("span");

inputValueAdd.onblur = () => {
    classNames.classList.add(inputValueAdd.value);
    span.innerHTML = inputValueAdd.value;
    document.querySelector(".classes-list").children[1].append(span);
    inputValueAdd.value = "";
}

inputValueRemove.onblur = () => {
    classNames.classList.remove(inputValueRemove.value);
    inputValueRemove.value = "";
    document.querySelector(".classes-list").children[1].remove(span);
}



