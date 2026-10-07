document.addEventListener('DOMContentLoaded',()=>{
    const todoinput = document.getElementById("todo-input");
    const addtaskbtn = document.getElementById("add-task-btn");
    const todolist = document.getElementById("todo-list");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
      render(task);
    });
    addtaskbtn.addEventListener("click", () => {
      const input = todoinput.value;
      // console.log(input);

      if (!input) return;

      let newtask = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      tasks.push(newtask);
      // console.log(newtask);
      // console.log(tasks);
      saveTask(tasks);
      render();
    });
    function render(task) {
      const li = document.createElement("li");
      li.setAttribute(task.id,"task-id")
      li.innerHTML = `
       <span>${task.text}</span>
        <button>Delete</button>    
    `;
      li.addEventListener('click',(e)=>{
        if(e.target.tagName == 'BUTTON') return ;

        task.completed = !task.completed
        li.classList.toggle("completed",task.completed);
      })  
        
      todolist.append(li);
    }
    function saveTask(tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function remove(tasks){
        tasks = fl 
    }

})