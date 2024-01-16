const taskInput = document.getElementById("task-input");
const taskTimeInput = document.getElementById("task-time");
const addTaskButton = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const taskTime = taskTimeInput.value;
    
    if (taskText === "") return;

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
        <span>${taskText}</span>
        <span class="task-time">${taskTime}</span>
        <div class="task-actions">
            <button class="delete-btn">Delete</button>
        </div>
    `;

    const deleteButton = taskElement.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskElement);
    });

    taskList.appendChild(taskElement);
    taskInput.value = "";
    taskTimeInput.value = "";
}
