const form = document.querySelector('.form');

form.addEventListener('submit', function(e){
    e.preventDefault();
   
    const inputPeso = document.querySelector('#inputPeso').value
    const inputAltura = document.querySelector('#inputAltura').value

    if (inputAltura < 0) return alert('Ops! A altura não pode ser negativa. Por favor, insira um valor válido.');
    if (inputPeso < 0) return alert('Ops! A Peso não pode ser negativo. Por favor, insira um valor válido.');

    const imc = CalculaIMC(inputPeso, inputAltura);
    const nivel = nivelIMC(imc);

    const msg = `Seu IMC é ${imc} (${nivel})`
    resultado(msg , nivel);

})

function nivelIMC(imc){
    const nivelIMC = ['Abaixo do peso','Peso saudável','Sobrepeso','Obesidade','Obesidade grave'];
    if (imc >= 40) return nivelIMC[4];
    if (imc >= 30) return nivelIMC[3];
    if (imc >= 25) return nivelIMC[2];
    if (imc >= 18.5) return nivelIMC[1];
    if (imc < 18.5) return nivelIMC[0];
}

function CalculaIMC(peso,altura){
    const imc = peso/(altura**2)
    return imc.toFixed(2)
}
function resultado(msg,nivel){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = `${msg}`;

    if(nivel === 'Abaixo do peso') return resultado.classList.add('baixoIMC')
    if(nivel === 'Peso saudável')  return resultado.classList.add('normalIMC')
    if(nivel === 'Sobrepeso') return resultado.classList.add('sobrepesoIMC')
    if(nivel === 'Obesidade') return  resultado.classList.add('obesidadeIMC')
    if(nivel === 'Obesidade grave')  return resultado.classList.add('obGraveIMC')
}

