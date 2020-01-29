function nove(numero){
    
    var num = numero.toString();
    var ultDig = num.charAt(num.length - 1);
    
    if(ultDig === "9"){
        return true
    }
    else return false
}