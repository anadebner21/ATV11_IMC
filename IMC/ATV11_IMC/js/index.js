function imc(){
    const nome = prompt ("Por favor informe seu nome:");
    let altura = prompt ("Informe sua altura:");
    let peso = prompt ("Informe seu peso:");
    let imc = peso/(altura * altura);

    alert(`Olá ${nome} ! Seu  Índice de Massa Corporal (IMC) é de  ${imc} ! Se resultou em 25 ou mais, entre em contato com a gente! Queremos  tornar sua vida mais leve =)`);
    
}


