const primerArticle = document.querySelector("article");
const articleClonado = primerArticle.cloneNode(true);

const contenedorMain = document.querySelector("main");
contenedorMain.appendChild(articleClonado);