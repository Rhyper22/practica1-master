//funciones de declaracion o funcion expresión
suma1 (15,20);
function suma1(a,b){
    //cuerpo de la function o conjunto de instrucciones que va a ejecutar la funcion
    console.log(a+b);
}


//funciones de expresion (no pueden llamarse primero que se crean!!)

const suma2 = function (a,b){
    console.log(a+b);
}
suma2 (25,45);


//HOISTING- CREACION-EJECUCION

//a y b son parametros = ES UNA VARIABLE QUE SE DEFINE DENTRO DE UNA FUNCION y que funciona
//argumentos son los valores reales

//ejemplo de plantilla de texto


function ingresaSistema(nombre= "", apellido= ""){
    console.log(`Bienvenido ${nombre} ${apellido} puedes ingresar al sistema`);
}
ingresaSistema(`jenny`, "Rojas");

