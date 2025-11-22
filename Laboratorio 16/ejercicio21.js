const tareas = [
  { titulo: "Estudiar DSOO", completada: true },
  { titulo: "Hacer ejercicio", completada: false },
  { titulo: "Leer un libro", completada: true },
  { titulo: "Pasear a la mascota", completada: false }
];

const listaTareas = document.getElementById("taskList");
tareas.forEach(tarea => {
    const li = document.createElement("li");   
    li.textContent = tarea.titulo;            
    li.classList.add("task-item");            

    if (tarea.completada) {
        li.classList.add("completed");          
    }

    listaTareas.appendChild(li);
});