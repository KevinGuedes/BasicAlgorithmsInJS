function primo(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

for(var i = 1; i < 10; i++){
    console.log(`O número ${i} é Primo? ${primo(i) ? "Sim" : "Não"}`);
}