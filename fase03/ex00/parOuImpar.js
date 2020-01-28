function nove(numero){
    
    var num = numero.toString();
    num = num.charAt(num.length - 1);
    
    if(num === "9"){
        return true;
    }
    else{
        return false;
    }
}