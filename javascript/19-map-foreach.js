const carrito = [
    {nombre: "monitor 20 pulgadas", precio: 500},
    {nombre: "televisión 50 pulgadas", precio: 700},
    {nombre: "tablet", precio: 300},
    {nombre: "audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
]

//muy similar al ForEach existe un array method llamado map, la diferencia es que map te crea un nuevo array, forEach trabaja en el array ya existente

/*const nuevoArray = carrito.map( function(producto){
    return `Artículo: ${producto.nombre} precio: ${producto.precio *2}`;
})*/


/*const nuevoArray2 = carrito.forEach( function(producto){
    console.log(`Artículo: ${producto.nombre} precio: ${producto.precio}`);
})*/

//console.log(nuevoArray);
//console.log(nuevoArray2);

for(let i=0; 1 < carrito.length; i++){
    console.log(`Artículo: ${carrito[i].nombre} Precio: $ ${carrito[i].precio} ` )
}