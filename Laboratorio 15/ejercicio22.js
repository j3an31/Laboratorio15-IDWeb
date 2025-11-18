const miSection = document.querySelector("section");

const h2_Original = miSection.querySelector("h2");

const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Título nuevo";
miSection.appendChild(nuevoH2);

const nuevoP = document.createElement("p");
nuevoP.textContent = "Descripción generada"
miSection.appendChild(nuevoP);

const nuevoUl = document.createElement("ul");
for (let i=1;i<=3;i++) {
    const li = document.createElement("li");
    li.textContent = `Ítem ${i}` 
    nuevoUl.appendChild(li);                   
}

miSection.appendChild(nuevoUl);

if (h2_Original) {
    h2_Original.remove();
}