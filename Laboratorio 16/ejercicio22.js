const form = document.getElementById("perfilForm");
const perfilContainer = document.getElementById("perfilContainer");

// Función para mostrar el perfil en pantalla
function mostrarPerfil(perfil) {
    perfilContainer.innerHTML = `
        <h2>Perfil Guardado</h2>
        <p><strong>Nombre:</strong> ${perfil.nombre}</p>
        <p><strong>Edad:</strong> ${perfil.edad}</p>
        <p><strong>País:</strong> ${perfil.pais}</p>
    `;
}

// Verifica si hay datos guardados al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const perfilGuardado = localStorage.getItem("perfil");

    if (perfilGuardado) {
        const perfil = JSON.parse(perfilGuardado); 
        mostrarPerfil(perfil);
    }
});

// Evento para guardar perfil al enviar el formulario
form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const perfil = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        pais: document.getElementById("pais").value
    };

    // Guarda en localStorage convertido a JSON
    localStorage.setItem("perfil", JSON.stringify(perfil));
    mostrarPerfil(perfil);
    form.reset();
});