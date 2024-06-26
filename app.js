function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar")
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado")
        botaoReiniciar.classList.add("container__botao")
    }
    else{
        botaoReiniciar.classList.remove("container__botao")
        botaoReiniciar.classList.add("container__botao-desabilitado")
    }
}
function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value)
    let de = parseInt(document.getElementById("de").value)
    let ate = parseInt(document.getElementById("ate").value)
    if(de >= ate){
        alert(" ERRO! O valor minimo não pode ser maior que o máximo!")
        return;
    }
    if(quantidade > (ate - de)){
        alert(`Impossivel gerar ${quantidade} números em um intervalo de ${ate - de} numeros!`)
        return;
    }
    let listaNumeros = []

    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate)

        while(listaNumeros.includes(numero)){
            numero = obterNumeroAleatorio(de, ate)
            alert('Tentando obter número inédito');
        }
        listaNumeros.push(numero)
    }

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaNumeros}</label>`
    alterarStatusBotao()
}

function obterNumeroAleatorio(min, max){    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById("de").value = ""
    document.getElementById("ate").value = ""
    document.getElementById("quantidade").value = ""
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
    alterarStatusBotao()
}