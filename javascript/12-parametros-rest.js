function listadoFrutas(fruta1, fruta2,...todasFrutas){
    console.log("la fruta 1 es: " +fruta1);
    console.log("la fruta 2 es: " +fruta2);
    console.log(todasFrutas);

}

listadoFrutas("cambur", "lechoza", "patilla", "melon", "guayaba");

var Frutas= ["fresas", "limon", "parchita"];

listadoFrutas(...Frutas, "cambur", "lechoza", "patilla", "melon", "guayaba");
