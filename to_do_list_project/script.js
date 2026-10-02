const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const STORAGE_KEY = "todo-tasks";

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  createTaskElement(taskText, false);
  taskInput.value = "";
  saveTasks();
}

function createTaskElement(taskText, completed) {
  const listItem = document.createElement("li");
  listItem.className = "task-item";
  if (completed) {
    listItem.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "complete-checkbox";
  checkbox.checked = completed;

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "task-text";
  taskTextSpan.textContent = taskText;

  const actions = document.createElement("div");
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.type = "button";
  editBtn.textContent = "Edit";

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";

  actions.append(editBtn, removeBtn);
  listItem.append(checkbox, taskTextSpan, actions);
  taskList.appendChild(listItem);
}

// One listener on the list handles every task, including ones added later.
taskList.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const taskItem = clickedElement.closest(".task-item");
  if (!taskItem) return;

  if (clickedElement.classList.contains("remove-btn")) {
    taskItem.remove();
    saveTasks();
    return;
  }

  if (clickedElement.classList.contains("edit-btn")) {
    editTask(taskItem, clickedElement);
    return;
  }

  if (clickedElement.classList.contains("complete-checkbox")) {
    taskItem.classList.toggle("completed");
    saveTasks();
  }
});

function editTask(taskItem, editBtn) {
  const taskTextSpan = taskItem.querySelector(".task-text");
  const editor = taskItem.querySelector(".task-edit-input");

  if (editor) {
    const updatedText = editor.value.trim();
    if (updatedText === "") {
      return;
    }
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = updatedText;
    editor.replaceWith(span);
    editBtn.textContent = "Edit";
    saveTasks();
    return;
  }

  const input = document.createElement("input");
  input.type = "text";
  input.className = "task-edit-input";
  input.value = taskTextSpan.textContent;
  taskTextSpan.replaceWith(input);
  editBtn.textContent = "Save";
  input.focus();
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      editTask(taskItem, editBtn);
    }
  });
}

function saveTasks() {
  const tasks = [...taskList.querySelectorAll(".task-item")].map(function (item) {
    const span = item.querySelector(".task-text");
    const editor = item.querySelector(".task-edit-input");
    return {
      text: span ? span.textContent : editor.value.trim(),
      completed: item.classList.contains("completed"),
    };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return;
  }
  try {
    JSON.parse(saved).forEach(function (task) {
      createTaskElement(task.text, task.completed);
    });
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

loadTasks();
