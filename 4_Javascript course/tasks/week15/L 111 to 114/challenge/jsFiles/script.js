var input = document.getElementById("input") ;
var list = document.getElementById("list") ;

function addTask() {
    if(input.value === ''){
        alert("type the name of the task !");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = input.value ;
        list.appendChild(li) ;
        var span = document.createElement("span") ;
        span.innerHTML = "\u00d7";
        li.appendChild(span) ;
    }
    input.value = "" ;
    saveData() ;
}

list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked") ;
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" ,list.innerHTML) ;
}

function showData(){
    list.innerHTML = localStorage.getItem("data") ;
}

showData() ;