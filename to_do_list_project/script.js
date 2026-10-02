// first we have to grab references to the elements we already built in the HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ---------- ADD TASK ----------
// it runs every time the Add Task button is clicked
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim(); // trim() removes accidental blank spaces

  // this if statement is to check for an empty string here stops the user from adding a task
  // that's just blank spaces - without this, the list would fill up with
  // invisible "tasks" that look like bugs
  if (taskText === "") {
    return;
  }

  createTaskElement(taskText);
  taskInput.value = ""; // this step is to clear the box so it's ready for the next task
});

// Builds one <li> task row and appends it to the list.
// Pulled into its own function because we reuse this exact structure
// every single time a task is added, so it shouldn't be repeated in the code.
function createTaskElement(taskText) {
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  // Using template literals here (backticks) makes the HTML easier to read
  // than joining strings together with plus signs
  listItem.innerHTML = `
    <input type="checkbox" class="complete-checkbox">
    <span class="task-text">${taskText}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="remove-btn">Remove</button>
    </div>
  `;

  taskList.appendChild(listItem);
}

// ---------- EVENT DELEGATION: Edit, Remove, Complete ----------
// One listener on the parent <ul> handles clicks for EVERY task,
// even ones that don't exist yet when the page first loads
taskList.addEventListener("click", function (event) {
  const clickedElement = event.target;
  const taskItem = clickedElement.closest(".task-item"); // finds the parent <li> of whatever was clicked

  if (!taskItem) return; // clicked outside any task, so ignore it

  // ---- REMOVE ----
  if (clickedElement.classList.contains("remove-btn")) {
    taskItem.remove();
  }

  // ---- EDIT ----
  if (clickedElement.classList.contains("edit-btn")) {
    const taskTextSpan = taskItem.querySelector(".task-text");
    const currentText = taskTextSpan.textContent;

    // We're using the browser's built-in prompt() instead of building a
    // custom popup ourselves - it's faster to implement and it already
    // matches the OK/Cancel dialog box shown in the assignment screenshot
    const updatedText = prompt("Edit task:", currentText);

    // Only update if the user typed something and didn't hit Cancel
    if (updatedText !== null && updatedText.trim() !== "") {
      taskTextSpan.textContent = updatedText.trim();
    }
  }

  // ---- COMPLETE / INCOMPLETE ----
  if (clickedElement.classList.contains("complete-checkbox")) {
    // toggle() adds the class if it's missing, removes it if it's already there -
    // this is what triggers the strikethrough style from our CSS.
    // also, We toggle a class instead of writing style changes directly in JS,
    // because that keeps all the visual styling inside the CSS file where
    // it belongs, and JS only handles the state (done or not done)
    taskItem.classList.toggle("completed");
  }
});
