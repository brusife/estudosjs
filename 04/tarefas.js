const lista = []
const listaf = document.getElementById('lista')
const check = document.getElementById('conc')

function AdcTarefa() {
    if (tarefa.value !== ""){
        var item = document.createElement('div')
        let tarefa = document.getElementById('tarefa')
        lista.push(tarefa.value)
        item.classList.add('item')
        item.innerHTML = `<div id="conc" onclick="Check(this)"></div>
        <div> ${tarefa.value} </div>
        <div class="excluir" onclick="Remover()"><img src="../imgs/remover.png" alt=""></div>`
        listaf.appendChild(item)
    }else {
        alert("Digite uma tarefa")
    }
}

function Remover() {
    listaf.lastChild.remove(); // Remove elemento HTML
  }

function Check() {
    check.innerHTML = `
        <img src="../imgs/check.png">`
  }