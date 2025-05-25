let btn = document.querySelector("#add");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    if(inp.value !=""){
  let list = document.createElement("li"); //new list
  list.innerText = inp.value; //list text

  let del = document.createElement("button"); //delete button
  del.classList.add("del");
  del.innerText = "delete";
  list.appendChild(del); //delete nutton append to list

  ul.append(list); //list append to ul
  inp.value = "";}
});

// Save tasks to localStorage when adding new task
btn.addEventListener("click", function () {
  if(inp.value !=""){
    let list = document.createElement("li");
    list.innerText = inp.value;

    let del = document.createElement("button");
    del.classList.add("del");
    del.innerText = "delete";
    list.appendChild(del);

    ul.append(list);
    saveTasks(); // Save tasks after adding
    inp.value = "";
  }
});

// Load tasks when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Handle delete and save
ul.addEventListener("click", function(event) {
  if(event.target.classList.contains("del")) {
    event.target.parentElement.remove();
    saveTasks(); // Save tasks after deletion
  }
});

// Function to save tasks
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('li').forEach(task => {
    tasks.push(task.firstChild.textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    let list = document.createElement("li");
    list.innerText = task;

    let del = document.createElement("button");
    del.classList.add("del");
    del.innerText = "delete";
    list.appendChild(del);

    ul.append(list);
  });
}