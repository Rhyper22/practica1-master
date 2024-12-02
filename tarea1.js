var numero1= parseInt(prompt("ingrese un numero"));
var numero2= parseInt(prompt("ingrese un numero"));


for (var i = numero1; i <= numero2; i=i+1) {
    if (i % 2 == 1) {
        console.log(i+ " es impar");
    }
}
