const inputTask = document.getElementById('input-task')
const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')


addTask.addEventListener('click', () =>{
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let dleteButton = document.createElement("button");
    dleteButton.innerHTML = '<i class="fas fa-solid fa-trash-can"></i>';
    dleteButton.classList.add('deleteTask');
    task.appendChild(dleteButton)

    if (inputTask.value === ""){
        alert('Please enter a task');
    }else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
})
