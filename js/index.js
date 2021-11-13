function imc(){
    const nome = prompt ("Por favor informe seu nome:");
    let altura = prompt ("Informe sua altura:");
    let peso = prompt ("Informe seu peso:");
    let imc = peso/(altura * altura);
console.log(imc);
  
}

function aposentadoria(){
   const nome = prompt('Qual é o seu nome?');
   let idade=calcularIdade(prompt('Que ano você nasceu?'));
   if(idade){
    alert(`Parabéns ${nome} você conseguiu esse grande feito, você irá se aposentar!`);
   }else{
       alert(`IH tem que trabalhar mais um pouco ${nome}`)
        let falta = 65 - checa; 
        console.log(falta);
        alert (`Faltam ${falta} anos pra vc se aposentar!!`);
        console.log(idade); 
    }

}
function calcularIdade(anoNascimento){
    checa = 2021 - anoNascimento ;
    let aposenta = true;
    console.log(checa);
    checa < 65 ? aposenta = false : aposenta = true; 
    return aposenta; 
}

function numero(){
    var palavras = new Array();
    var n = prompt('Quantas palavras vc quer colocar?');
    console.log(palavras);
    for(let i = 0; i < n; i++){
        palavras[i] = prompt('Informe uma palavra:');

    
    }
    palavras.reverse();
    for(let i = 0; i < n; i++){
        alert(palavras[i]);
        console.log(palavras[i]);
    }

    
    

}


