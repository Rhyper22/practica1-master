var nombre= "Jenny";
var profesores= ["juan", "pedro", "maria", "jose", "rosita"];
var materias= ["matematicas", "lenguaje", "ingles"];

console.log(profesores[2]);
console.log(profesores.length);//cuenta cuantas posiciones tiene su arreglo metodo length


//metodos para trabajar con texto
console.log(nombre.toUpperCase());//es para que el texto se visualice en mayuscula
console.log(nombre.toLowerCase());//es para que el texto se visualice en minuscula


document.write("<h1> Ejercicios de Arrays</h1>");
document.write("<ul>");

materias.forEach((element, indice, arr) => {
    //document.write(arr);
    document.write("<li>"+indice+ " " +element + "</li>");
});
document.write("</ul>");

document.write("<ul>");

profesores.forEach((element, indice, arr) => {
    document.write("<li>"+indice+ " " +element + "</li>");
});
document.write("</ul>");