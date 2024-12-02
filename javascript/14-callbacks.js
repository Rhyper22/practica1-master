function sumando (n1, n2, SumaMuestra, SumaPorDos){


    var suma= n1+n2;
    SumaMuestra(suma);
    SumaPorDos(suma);

    return(suma);


}

sumando(25,50, function(dato){console.log("la suma es:" +dato);}, function (dato){console.log("la suma por dos es:"+ (dato*2));})

