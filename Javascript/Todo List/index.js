// Selectors
const todoInput = document.querySelector("#input");
const todoButton = document.querySelector("#button");
const todoList = document.querySelector("#task");
const filterTodo = document.querySelector(".filter-todo");
// EventListener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", delFun);
filterTodo.addEventListener("click", filterFun);
// Function
function addTodo(event){
    event.preventDefault();

    // Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("div");

    //Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.append(newTodo);
    //CompleteButton
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    completeButton.classList.add("complete");
    todoDiv.append(completeButton);
    //Trash
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash");
    todoDiv.append(trashButton);

    todoList.append(todoDiv);
    todoInput.value = "";
}
function delFun(e) {
    const choose = e.target;
    if (choose.classList[0] === "trash"){
        const delTodo = choose.parentElement;
        delTodo.classList.add("fall");
        delTodo.addEventListener("transitionend", function(){
        delTodo.remove();
        });
    }
    if (choose.classList[0] === "complete"){
        const comp = choose.parentElement;
        comp.classList.toggle("completed");
    }
}
function filterFun(e){
    const selectChild = todoList.childNodes;
    selectChild.forEach(function(yup){
        switch(e.target.value){
            case "all":
                yup.style.display="flex";
            break;
            case "completed":
                if(yup.classList.contains("completed")){
                    yup.style.display="flex";
                }else{ 
                    yup.style.display= "none" ; 

                }
            break;
        }
    });
}
