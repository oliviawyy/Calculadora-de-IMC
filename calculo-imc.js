// obter o elemento
// tratar os dados (converter, exivir os dados de forma correta)
// fazer os calculos


// CAPTURA GLOBAL DOS ELEMENTOS
const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

// FUNÇÃO AUXILIAR
function mostrarResultado(mensagem) {
    textoResultado.textContent = mensagem;
}

// FUNÇÃO PRINCIPAL
function calcularIMC() {
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    // Validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mostrarResultado('Por favor, insira valores válidos.');
        return;
    }

    // Cálculo
    const imc = peso / (altura * altura);
    let classificacao = '';

    // Classificação
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Template String
    mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
}

// LIMPAR CAMPOS
function limparCampos() {
    formulario.reset();
    inputPeso.focus();
    mostrarResultado('Preencha os campos e clique em "Calcular".');
}