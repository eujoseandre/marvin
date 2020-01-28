function vogalOuConsoante(letra){

var l = letra.toUpperCase();
 
 var a = "A";
 var e = "E";
 var i = "I";
 var o = "O";
 var u = "U";
 
 if((l === a) || (l === e) || (l === i) || (l === o) || (l === u)){
     return ("Vogal")
 }
 else{
     return ("Consoante")
 }
}