document.addEventListener("DOMContentLoaded", () => {
  const todoinput = document.getElementById("todo-input");
  const addtaskbutton = document.getElementById("addtaskbutton");
  const todolist = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    render(task);
  });

  addtaskbutton.addEventListener("click", () => {
    let tasktext = todoinput.value.trim();
    if (tasktext == "") return;

    const newtask = {
      id: Date.now(),
      Text: tasktext,
      completed: false,
    };

    tasks.push(newtask);
    savetask();
    render(newtask);
    console.log(newtask);
  });
  function render(task) {
    const li = document.createElement("li");
    li.setAttribute("data-task-id", task.id);

    li.innerHTML = `
    <label>
      <input type="checkbox">
      <span class="custom-checkbox"></span>
      <span class="task-text">${task.Text}</span>
    </label>
    <button class="delete-btn">✖</button>
  `;

    // restore completed state on reload
    li.classList.toggle("completed", task.completed);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      task.completed = !task.completed;
      li.classList.toggle("completed", task.completed);
      savetask();
    });

    li.querySelector(".delete-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id != task.id);
      li.remove();
      savetask();
    });

    todolist.appendChild(li);
  }

  function savetask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
