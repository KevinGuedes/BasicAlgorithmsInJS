function primo(num){
    for(var i = 2; i < num; i++){
        if(num % i ===0){
            return false;
        }
    }
    return num !== 1;
}

for(let i = 1; i < 5; i++){
    var resultado = primo(i);
    console.log(`${i} é primo? ${resultado}`);
}