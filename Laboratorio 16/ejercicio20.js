document.getElementById("guardarBtn").addEventListener("click", () => {
    const nombreUsuario = document.getElementById("nombre").value;
    if (nombreUsuario.trim() === "") {
        alert("¡Por favor, escribe un nombre!");
        return;
    }

    const usuario = {
        nombre: nombreUsuario
    };

    const usuarioJson = JSON.stringify(usuario);
    console.log("Objeto convertido a JSON:", usuarioJson);
});