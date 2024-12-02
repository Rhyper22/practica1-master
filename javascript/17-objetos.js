///objeto literal en vez de crear 3 variables crear un objeto
const curso = {

    nombre: "programacion",
    precio: 40,
    disponible: true,
    informacion:{
        FechaInicio: "5 de noviembre",
        FechaFinalizacion: "20 de diciembre",
        diploma:{
            entrega: "22 de abril",
            profesor: "jose palma"
        }
    }
}

const {nombre, precio, disponible, informacion, diploma, informacion:{FechaInicio}, informacion: {diploma:{profesor}}} = curso;
console.log(profesor);
 console.log(curso);


 //Object.freeze(curso); //congelar un objeto

 //curso.entrada = "marron"; //intento de agregar una propiedad despues de congelar

 //delete curso.nombre; //intento de borrar una propiedad despues de congelar

 //Object.seal(curso); // NO SE PUEDE ELIMINAR NI AGREGAR PERO SI SE PUEDEN EDITAR LAS PROPIEDADES
 //curso.nombre = "marketing";
 //console.log(curso)

 //COMO UNIR 2 OBJETOS

 const planificacion = Object.assign(curso, profesor);
 console.log(planificacion);

 //sprezd operator

 const planificacion2 = {...curso, ...profesor};

 //console.log(curso);

 //console.log(Object.isFrozen(curso)); //para validad si el objeto esta congelado

/*curso.modalidad= "presencial"; //agregar una propiedad
console.log(curso);

delete curso.modalidad; //borrar una propiedad
console.log(curso);



const carro = {

    marca: "ferrari",
    año: 2004,
    color: "azul",
    pais: "italia"
}

console.log(carro);


//destructuracion de objetos--- SACAR DE UNA ESTRUCTURA: extrae el valor de un objeto y lo transforma en una variable que puede ser llamada individualmente
const {marca, año, color, pais} = carro;
console.log(marca); */