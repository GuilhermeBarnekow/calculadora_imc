const calcular = document.getElementById('Calcular');

function imc() {
    const nome = document.getElementById('Nome').value
    const altura = +document.getElementById('Altura').value;
    const peso = +document.getElementById('Peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso/(altura*altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do Peso';
        } else if (valorIMC < 25) {
            classificacao = 'Com Peso Ideal';
        } else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso';
        } else if (valorIMC < 35) {
            classificacao = 'Com obesidade grau I';
        } else if (valorIMC < 40) {
            classificacao = 'Com obesidade Grau II';
        } else {
            classificacao = 'Com obesidade Grau III. Cuidado';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    
    } else {
        resultado.textContent = 'Prencha Todos os Campos';
    }
}

calcular.addEventListener('click', imc);