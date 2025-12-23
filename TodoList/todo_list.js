const taskInput = document.getElementById('taskInput');

const addTaskBtn = document.getElementById('addTaskBtn');

const taskList = document.getElemetById('taskList');
const clearCompletedBtn = document.getElemetById('clearCompletedBtn');
const clearTasksBtn = document.getElementById('clearTasksBtn');
const searchInput = document.getElementById('searchInput');


let tasks = [];


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}
        />
        <label for="task-${index}">${task.text}</label>
        `;
        li.querySelector("input").addEventListener("change",()=>{
            toggleTask(index)
        });
        taskList.appendChild(li);
    })
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


function clearCompletedTasks(){
    tasks=tasks.filter((task)=>
        !task.completed
    );
    displayTasks();
}

function deleteAllTasks(){
    tasks = "";
    taskList.innerHTML = "";
    displayTasks();
}


function searchForTask(searchQuery){
    foundTasks = tasks.filter((task)=> task.text.includes(searchQuery.trim()));
    if(foundTasks.length == 0){
        alert('no tasks found.');
        displayTasks()
        return
    }
    else{
        taskList.innerHTML = "";
        foundTasks.forEach((task,index)=>{
            const li = document.createElement('li');
            li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}
            />
            <label for="task-${index}">${task.text}</label>
            `;
            li.querySelector("input").addEventListener("change",()=>{
                toggleTask(index)
            });
            taskList.appendChild(li);
        })
    }
}


addTaskBtn.addEventListener("click",addTask);
clearCompletedBtn.addEventListener("click",clearCompletedTasks)
clearTasksBtn.addEventListener("click",deleteAllTasks)

