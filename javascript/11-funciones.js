function PorConsola(n1,n2){
    console.log("la suma de 2 numeros es", (n1 + n2));
   console.log("la resta de 2 numeros es", (n1 - n2));
   console.log("la multiplicacion de 2 numeros es", (n1 * n2));
   console.log("la division de 2 numeros", (n1 / n2));
}

function PorPantalla(n1,n2){
    document.write("la suma de 2 numeros es ", n1 + n2 +"</br>");
    document.write("la resta de 2 numeros es ", n1 - n2 +"</br>");
    document.write("la multiplicacion de 2 numeros es ", n1 * n2 +"</br>");
    document.write("la division de 2 numeros ", n1 / n2 +"</br>");
}


function calcula (n1, n2, mostrar=false){

    if(mostrar==false){
    PorConsola(n1,n2);

}else{
    PorPantalla(n1,n2);
} 
}

calcula(30,20,false);

