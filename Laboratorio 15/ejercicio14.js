const contenedor = document.getElementById("contenido");

while(contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
} // Mientras exista un primer hijo, este se va a eliminar