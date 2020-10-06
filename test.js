const mostra = (sentence) => {
    console.log(sentence)
};
mostra(3)



//Callback
function show(sentence, print){
    print(sentence)
}

show('3', console.log)