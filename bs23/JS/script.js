let form = document.querySelector("#task_form");
let taskInput = document.querySelector("#new_task");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", removeTask);
clearBtn.addEventListener("click", clearTask);
filter.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTasks);
// ADD
function addTask(e) {
    if (taskInput.value === "") {
        alert("Please add a task!");
    } else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(taskInput.value + " "));
        
        let link = document.createElement("a");
        link.setAttribute("href", "#");
        link.appendChild(document.createTextNode("x"));
        
        li.appendChild(link);
        taskList.appendChild(li);

        taskInput.value = "";
    }
    e.preventDefault();
}
// REMOVE
function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        e.target.parentNode.remove();
    }
}
// CLEAR All TASKS
function clearTask(e) {
    while (taskList.firstChild) {
        let ele = taskList.firstChild;
        taskList.removeChild(ele);
    }
    localStorage.clear();
}
