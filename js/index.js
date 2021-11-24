function imc(){
    const nome = prompt ("Por favor informe seu nome:");
    let altura = prompt ("Informe sua altura:");
    let peso = prompt ("Informe seu peso:");
    let imc = peso/(altura * altura);
    console.log(imc);

    if(imc <17){
        alert(`${nome}, você está MUITO abaixo do peso!\n Seu IMC é de ${imc}\n Dica: procure um nutricionista!`);
    } else if(imc >= 17 && imc <= 18.49){
        alert(`${nome}, você está um pouco abaixo do peso!\n Seu IMC é de ${imc}\n Dica: se alimente melhor!!`);
    }else if(imc >= 18.5 && imc <= 24.99){
        alert(`${nome}, está no peso ideal para você!\n Seu IMC é de ${imc}\n Dica: CONTINUE ASSIM!`);
    }else if(imc >=25 && imc <= 29.99){
        alert( `${nome}! Você está acima do peso.\n Seu IMC é de ${imc}\n Dica: É hora de parar de comer Big Mac.`);
    }else if(imc >= 30 && imc <= 34.99){
        alert(`${nome}, você está acima do peso!\n Seu IMC é de ${imc}, isso se encaixa em OBESIDADE 1! \n Dica: cuidado para não piorar, procure fazer atividades físicas!`);
    }else if(imc >= 35 && imc <= 39.99){
        alert(`${nome}, você está ACIMA do peso, OBESIDADE 2 = SEVERA!\n Seu IMC é de ${imc}\n Dica: Procure um nutricionista, CUIDADO!`);
    }else {
        alert(`${nome}, você está MUITO Acima do peso, OBESIDADE 3 = MÓRBIDA !\n Seu IMC é de ${imc}\n Dica: Procure um nutricionista, e faça ativadade física, muito Cuidado com sua saúde ${nome}!`);
    }
  
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

function gorjeta(){
    var ret = prompt("Qual é o nome do primeiro restaurante?"); 
    var ret2= prompt ("Qual é o segundo restaurante?" );
    var ret3 = prompt("Qual é o terceiro?");
    var arrayRestaurantes = [ret, ret2, ret3];

    var total1 = prompt("Qual foi o preço total da refeição no restaurante 1?");
    var total2 = prompt("Qual foi o preço total da refeição no restaurante dois?");
    var total3 = prompt("Qual foi o preço total da refeição no restaurante 3?");
    var arrayPrecoTotal = [total1, total2, total3];

    console.log("Restaurante 1: " + arrayRestaurantes[0] + "  Restaurante 2:  " + arrayRestaurantes[1] + "  Restaurante 3: " + arrayRestaurantes[2]);
    console.log("valor 1: " + arrayPrecoTotal[0] + " valor 2: " + arrayPrecoTotal[1] + "  valor 3: " + arrayPrecoTotal[2]);

    var gorgetas = [calcGorgeta(total1), calcGorgeta(total2), calcGorgeta(total3)];
    console.log("gorjeta 1:  " + gorgetas[0] + " gorjeta 2:  " + gorgetas[1] + "  gorjeta 3: " + gorgetas[2]);

    var resultados= [(parseFloat(total1) + parseFloat(calcGorgeta(total1))), (parseFloat(total2) + parseFloat(calcGorgeta(total2))), (parseFloat(total3) + parseFloat(calcGorgeta(total3)))]
    console.log("total + gorjetas 1:  " + resultados[0] + "total + gorjeta 2:  " + resultados[1] + "  total + gorjeta 3: " + resultados[2]);

    imprime(arrayRestaurantes, arrayPrecoTotal, gorgetas, resultados);
}
    function calcGorgeta(n){ 
        if(n < 50){ 
         var gorgeta = 0.2 * n; 
         return gorgeta; 
        } 
        
        else if(n >= 50 && n <= 200){ 
         var gorgeta = 0.15 * n; 
         return gorgeta; 
        } 
        
        else if(n > 200){ 
         var gorgeta = 0.1 * n; 
         return gorgeta; 
        } 
         
    }

    function imprime(arrayRestaurantes, arrayPrecoTotal, gorgetas, resultados ){
        for(i = 0; i < arrayRestaurantes.length; i++){
            alert(arrayRestautantes [i] + '\n\n Valor: ' + arrayPrecoTotal [i] + ' | Gorgeta: ' + gorgetas [i] + ' | Total: ' + resultados[i]);        }
    }



