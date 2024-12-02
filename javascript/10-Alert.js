alert("hola mundo");
var n1= parseInt(prompt("introduce un número 1",0));
var n2= parseInt(prompt("introduce un número 2",0));

//console.log(n1,n2);

if(n1>n2){
    console.log("el número mayor es "+n1);
    console.log("el número menor es "+n2);

}else if(n2>n1){
    console.log("el número mayor es "+n2);
    console.log("el número menor es "+n1);

}else if(n1==n2){
    console.log("el numero " +n1+ " y " +n2+ " son iguales");
    console.log("El número 1 es... "+n1);
    console.log("El número 2 es... "+n2);
}