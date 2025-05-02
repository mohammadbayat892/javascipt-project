const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll("[data-filter]");

// Load tasks from Local Storage
document.addEventListener("DOMContentLoaded", loadTasks);

// Add new task
addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = todoInput.value.trim();
    if (!taskText) return alert("Please enter a task!");

    const task = createTaskElement(taskText);
    todoList.appendChild(task);
    saveTask(taskText, false);

    todoInput.value = "";
}

// Create task element
function createTaskElement(taskText, completed = false) {
    const li = document.createElement("li");
    li.textContent = taskText;
    if (completed) li.classList.add("completed");

    const completeButton = document.createElement("button");
    completeButton.textContent = "✔";
    completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTask(taskText, li.classList.contains("completed"));
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.addEventListener("click", () => {
        deleteTask(taskText);
        li.remove();
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    return li;
}

// Save task to Local Storage
function saveTask(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from Local Storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const taskElement = createTaskElement(task.text, task.completed);
        todoList.appendChild(taskElement);
    });
}

// Update task in Local Storage
function updateTask(taskText, completed) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskIndex = tasks.findIndex(task => task.text === taskText);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

// Delete task from Local Storage
function deleteTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const filteredTasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
}

// Filter tasks
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        Array.from(todoList.children).forEach(task => {
            if (filter === "all") {
                task.style.display = "flex";
            } else if (filter === "completed" && !task.classList.contains("completed")) {
                task.style.display = "none";
            } else if (filter === "uncompleted" && task.classList.contains("completed")) {
                task.style.display = "none";
            } else {
                task.style.display = "flex";
            }
        });
    });
});
