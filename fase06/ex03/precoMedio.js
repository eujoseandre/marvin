function precoMedio(){
    
    let array = arguments;
    let i = 0;
    let j = 0;
    let soma = 0;
    let arrayValores = [];
    let valor = 0;
    let numeroMaior = 0;
    
    while (i < arguments.length){
        soma += array[i].preco;
        valor = array[i].preco;
        var total = arrayValores.push(valor)
        if (arrayValores[i] > numeroMaior){
        numeroMaior = arrayValores[i];
        }
        i++;
   }
   while (j < arguments.length){
        if (array[j].preco == numeroMaior){
            let string = array[j].nome;
           console.log('O produto mais caro se chama ' + '"' + array[j].nome + '"')
       }
       j++;
   }
    return soma/arguments.length
}
