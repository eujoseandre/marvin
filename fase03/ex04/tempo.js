function tempo(data1, data2, unidade){
    var data01 = new Date(data1);
    var data02 = new Date(data2);
    var diferenca = Math.abs(data02.getTime() - data01.getTime());
    var ano = Math.round(diferenca / (1000*60*60*24*30*12));
    var mes = Math.round(diferenca / (1000*60*60*24*30));
    var dia = Math.round(diferenca / (1000*60*60*24));
    
    if(unidade === "dia"){
        return dia;
    }
    else if (unidade === "mes"){
        return mes;
    }
    else return ano;
}