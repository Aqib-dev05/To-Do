let btn = document.querySelector("#add");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    if(inp.value !=""){
  let list = document.createElement("li"); //new list
  list.innerText = inp.value; //list text

  // let del = document.createElement("button"); //delete button
  // del.classList.add("del");
  // del.innerText = "delete";
  // list.appendChild(del); //delete nutton append to list

  ul.append(list); //list append to ul
  inp.value = "";}
});

