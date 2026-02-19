// calcular imc - variaveis no scopo global
let peso = 80;
    let altura = 1.75;
    const imc = peso / (altura * altura);


function calcularIMC() {
    
    console.log(`Este é com valor do IMC calculado: ${imc.toFixed(2)}.`);
    classificaIMC();
};

// classificar imc 
function classificaIMC() {
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        console.log('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        console.log('Sobrepeso');
    } else {
        console.log('Obesidade');
    }

};

calcularIMC();
