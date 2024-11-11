let aviso = document.getElementById('aviso')
let input = document.getElementById('name')
let cont = document.getElementById('conteudo')
let idades = document.getElementById('nasc')
let article = document.getElementById('article')
var passo

for (passo = 1; passo <= 90; passo++) {
    const opt = document.createElement('option')
    opt.value = passo
    opt.text = passo
    idades.appendChild(opt)
}

function Mostrar() {
    let tnome = input.value.trim()
    if (tnome !== "" && tnome !== undefined && tnome !== null) {        
    aviso.style.top="0"
    if (idades.value <18 || idades.value == "Sua Idade") {
        aviso.innerHTML = `<p><span class="mdi mdi-cancel"></span> Você não tem idade suficiente para ver esses conteúdos...</p>`
    } else {
        article.style.background="rgb(29, 22, 29)"
        article.style.animation="none"
        aviso.innerHTML= `
    <img src="../imgs/perfilterror.jpg">
        <p>Bem vindo(a) <span id="enome">${tnome} </span></p>
    `
    Exibir()
    }
    
    setTimeout(function voltar() {
        aviso.style.top="-300px"
    }, 3000)
    } else {
        alert("Preencha seu nome")
    }
}

function Exibir() {
    let tnome = input.value.trim()
    if (tnome !== "" && tnome !== undefined && tnome !== null) {
        cont.classList.remove('cont')
        cont.classList.add('bemvindo')
        cont.innerHTML = `<div id="bv"><p>Bem vindo (a) <span id="nomebv">${tnome}</span></p>
                <p>Aproveite seus pesadelos...</p>
                    <img src="../imgs/filmes.jpg" alt="">
            <p>*Esse site é só um estudo e não tem nenhum tipo de conteúdo de filme de terror, ou trecho deles...</p>
            <p><button id="entrar" onclick="Sair()">Sair</button></p>
            </div>`
    }
    
}

function Sair (){
    history.go(0)
}