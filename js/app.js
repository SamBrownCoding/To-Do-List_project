let itemInput = document.getElementById("itemInput");
let taskList = document.getElementById("taskListed");

let addBTN = document.getElementById("addBtn");

addBTN.addEventListener("click", () => {
    if (itemInput.value === '') {
        alert("You must write something!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = itemInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    itemInput.value = '';
    saveData();
})

taskList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();