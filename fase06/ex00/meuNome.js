function meuNome(objeto){
    var inicio = objeto.nome.substring(0,1).toUpperCase();
    var fim = objeto.nome.substring(1).toLowerCase();
    return inicio + fim;
}