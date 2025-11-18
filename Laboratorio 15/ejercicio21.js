const miDiv = document.getElementById("contenedor");
for(let i=1;i<=3;i++) {
    let numParrafo = i + 2;
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = `Párrafo ${numParrafo} 
    creado dinámicamente.`
    miDiv.appendChild(nuevoParrafo);
}

const segundoP = miDiv.children[1];
segundoP.remove();