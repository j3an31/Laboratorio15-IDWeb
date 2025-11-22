let personaJson = `{
    "nombre": "Carlos",
    "edad": 25,
    "ciudad": "Arequipa"
}`;

console.log("JSON original:", personaJson);
let personaObj = JSON.parse(personaJson);
personaObj.edad = 30;
personaObj.profesion = "Ingeniero";
let personaJsonActualizado = JSON.stringify(personaObj, null, 2);
console.log("JSON actualizado:", personaJsonActualizado);