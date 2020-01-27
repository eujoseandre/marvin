function maiusculo (palavra) {
    const beggining = palavra.substr(0, 3).toUpperCase()
    const end = palavra.substr(3);
    return beggining + end;
}