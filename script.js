let addButton = document.getElementById("submit");
let list = document.getElementById("task");
let myInput = document.getElementById("input");
const press = document.getElementsByClassName("next-btn")[0];
let lised = document.getElementsByTagName("li");
let para = document.getElementById("para");


addButton.addEventListener("click", () => {
    if(myInput.value.trim() !== ""){
        active(myInput.value)
        myInput.value = "" ;
        para.innerText = lised.length;
    }
});




const active = (e) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.classList.add("txt");
    span.setAttribute("id", "txt")
    span.innerText = e;
    let button = document.createElement("button");
    button.classList.add("btn");
    button.setAttribute("id", "delete");
    button.setAttribute("onclick", `delectItem(this)`);
    button.innerText = "delete";
    let edit = document.createElement("button");
    edit.classList.add("btns");
    edit.setAttribute("id", "edit");
    edit.setAttribute("onclick", `editItem(this)`)
    edit.innerText = "Edit";

    li.appendChild(edit);
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);

}

function delectItem(elm) {
    let parentElement = elm.parentElement;
    if (confirm("Are you sure you want to delete this")){
        parentElement.remove();
    }
    para.innerText = lised.length;
}

let editItem = (e) => {
    let span = document.getElementById("txt");
    myInput.value = span.innerHTML;
    press.classList.add("active")
    press.addEventListener("click", () =>{
        span.innerHTML = myInput.value
        myInput.value = "";
        press.classList.remove("active")
    });

}