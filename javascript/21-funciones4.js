//Arrow functions en métodos de propiedad

/*const reproductor ={
    canción: "",
    reproducir: id => console.log(`reproduciendo canción id ${id}`),
    pausar: id => console.log(`pausando...la cancion id ${id}`),
    borrar: id => console.log(`borrando canción con id: ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar(30);
reproductor.crearPlaylist("Hymn for the Weekend");
reproductor.reproducirPlaylist("Viva la Vida");*/

//tambien los métodos pueden quedarse por fuera
// reproductor borrar = function(id){

const onoff ={
    carro: "",
    encender: nombre => console.log(`Encendiendo el carro modelo ${nombre}`),
    apagar: nombre => console.log(`apagando el carro modelo ${nombre}`),
    dueño: nombre => console.log(`el dueño del carro es...${nombre}`),

    set nuevoCarro(carro){
        this.carro= carro;
        console.log(`añadiendo ${carro}`)
    },
    get obtenerCarro(){
        console.log(`${this.carro}`)
    }
}

onoff.encender("Yaris");
onoff.apagar("Yaris");
onoff.dueño("Rafael Funes")
onoff.nuevoCarro="Yaris Cross 2024"








