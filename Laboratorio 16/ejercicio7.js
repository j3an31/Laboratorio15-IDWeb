const input = document.getElementById("textoInput");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const lista = document.getElementById("lista");

btnAgregar.addEventListener("click", function () {
    const texto = input.value.trim();
    if (texto === "") {
        alert("¡Escribe algo antes de agregar!");
        return;
    }
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    lista.appendChild(nuevoItem);
    input.value = ""; 
});

btnEliminar.addEventListener("click", function () {
    const ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
        ultimoItem.remove();
    } else {
        alert("¡No hay elementos para eliminar!");
    }
});