function acharNumero(numero){
    if(numero < 5){
        return "mercurio";
    }
    else if(numero >= 5 && numero <= 10){
        return "venus";
    }
    else if (numero > 10 && numero <= 100){
        return "terra";
    }
    else return "marte";
}