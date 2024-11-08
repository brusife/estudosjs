let aviso = document.getElementById('aviso')
let input = document.getElementById('name')
let cont = document.getElementById('conteudo')


function Mostrar() {
    let tnome = input.value
    aviso.style.top="0"
    aviso.innerHTML= `
    <img src="../imgs/perfilterror.jpg">
        <p>Bem vindo(a) <span id="enome">${tnome} </span></p>
    `
    setTimeout(function voltar() {
        aviso.style.top="-300px"
    }, 3000)
}

function Exibir() {
    cont.innerHTML = ""
    cont.style.background = "white"
}