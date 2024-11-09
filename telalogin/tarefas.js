let aviso = document.getElementById('aviso')
let input = document.getElementById('name')
let cont = document.getElementById('conteudo')
let idades = document.getElementById('nasc')
var passo

for (passo = 1; passo <= 90; passo++) {
    let opt = document.createElement('option')
    opt.value = passo
    opt.text = passo
    idades.appendChild(opt)
}

function Mostrar() {
    let tnome = input.value.trim()
    if (tnome !== "" && tnome !== undefined && tnome !== null) {        
    aviso.style.top="0"
    aviso.innerHTML= `
    <img src="../imgs/perfilterror.jpg">
        <p>Bem vindo(a) <span id="enome">${tnome} </span></p>
    `
    setTimeout(function voltar() {
        aviso.style.top="-300px"
    }, 3000)
    } else {
        alert("Preencha seu nome")
    }
}

function Exibir() {
    cont.innerHTML = ""
}