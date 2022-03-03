function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
function testarPares(arrayLista = []){//Está função vai testar os melhores pares.
    let filmes = arrayLista;
    let controle ; 
    filmes.sort();

    let teste = 0;
    if(filmes.length % 2 === 0 ){
        controle = filmes.length ;
        for(i = 0; controle < i;i ++){
            indiceNegativo =- 1
            if(filmes[i]+filmes[indiceNegativo]<3.00){
                teste += 1;
            };
        }


    }else{
        controle = filmes.length ;
        for(i = 0; controle > i; i ++){
            
            indiceNegativo =- 1
            if(filmes[i] + filmes[filmes.length -1] < 3.2){
                teste += 1
            };
        }
    }
    console.log(filmes);
    console.log(controle);
    console.log(teste);
    console.log(`lista para organizar: ${filmes}`);

}




function bubbleSort(items) {
    var length = items.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(items[j] + items[j+1] >3.00) {
                           var tmp = items[j]; 
                items[j] = items[j+1]; 
                items[j+1] = tmp; 
            }
        }        
    }
}


a= [1.99, 2.77, 1.19, 1.17, 1.28, 2.33, 2.81, 1.9, 1.27, 1.45];
for(x = 1; x <= 9; x++){
    //a.push(parseFloat( getRandomArbitrary(1.01,3.0).toFixed(2)))
}

n = [1.90, 1.04, 1.25, 2.5, 1.75];


function contarDias( arrayLista = []){
    let filmesLongos = [];
    let filmesCurtos = [];
    let contadorDia = 0;  

    if(arrayLista.length < 1 || arrayLista.length >= 1000){
        console.log("Esse quantidade de Filmes é invalida !!!")
    }else{
        for(i of arrayLista){
            if(i >= 1.01 && i <= 1.99){
                filmesCurtos.push(i);
            }
            else{
                filmesLongos.push(i);
            }
        };
    };

    contadorDia += filmesLongos.length;
    console.log(filmesLongos);
    //console.log(filmesCurtos);
    console.log(`foram necessários ${contadorDia} dias para assistir todos os filmes.`)
    testarPares(filmesCurtos);
};

console.log(a);
contarDias(a);