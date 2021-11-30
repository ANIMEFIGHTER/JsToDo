const field = document.querySelector('.field'),
    button = document.querySelector('.add'),
    list = document.querySelector('.list');

function createTask(value){
    const task = document.createElement("div");
    const chb = document.createElement("checkbox");
    task.classList.add("task");
    task.classList.add("success")
    task.textContent = value;
    chb.classList.add("status");
    chb.textContent = "✓";
    task.append(chb);
    chb.addEventListener('click', completeTask);
    return task;
}

function addTask(){
    if (field.value != false){
        const newTask = createTask(field.value);
        list.appendChild(newTask);
        field.value = null;
        console.log(list);
    } else{
        alert("Строка пуста")
    }
}

function completeTask(event){
    const target = event.target;
    const parentElement = target.parentElement.style.color = "green";
    console.log(target);
}
button.addEventListener('click', addTask);
