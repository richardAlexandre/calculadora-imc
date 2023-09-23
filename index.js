
let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', function (e) {
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)


    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit




    //criar objeto pessoa

    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        sit: sit,
    }


    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + "anos"
    dados[3].textContent = pessoa.peso + "KG"
    dados[4].textContent = pessoa.altura + "m"
    dados[1].textContent = pessoa.imc + " " + pessoa.sit


    e.preventDefault()


})

function situacaoDoPeso(imc) {
    let situacao = ''

    if (imc < 18.5) {
        situacao = 'Baixo Peso ';
        aviso.textContent = situacao;
        aviso.classList.add('alerta');


    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso Normal'
        aviso.textContent = situacao;
        aviso.classList.add('saldavel');

    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso';
        aviso.textContent = situacao;
        aviso.classList.add('cuidado')
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = ' obesidade I';
        aviso.textContent = situacao;
        aviso.classList.add('cuidado')

    } else if (imc >= 35 && imc <= 39.9) {
        situacao = ' Obesidade II';
        aviso.textContent = situacao;
        aviso.classList.add('alerta');
    } else if (imc >= 40) {
        situacao = 'Obesidade III',
        aviso.textContent = situacao;
        aviso.classList.add('alerta');
    } else {
        situacao = 'Informe seu peso corretamente'
    }

    return situacao

}
