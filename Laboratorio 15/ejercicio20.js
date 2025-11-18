const nuevoUl = document.createElement("ul");
const numeroDeLi = parseInt(Math.random()*5 + 1);
for (let i=1;i<=numeroDeLi;i++) {
    const li = document.createElement("li"); 
    const nuevoSpan = document.createElement("span");
    nuevoSpan.textContent = "Nivel interno"
    li.appendChild(nuevoSpan);
    nuevoUl.appendChild(li);                   
}

document.body.appendChild(nuevoUl);