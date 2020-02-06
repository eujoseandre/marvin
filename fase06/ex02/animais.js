function animais(array){
    
    let num = 5;
    let i = 0;
    while (i < array.length){
    delete array[i].altura;
    array[i].idade = num;
    num++;
    i++;
}
    return array
}