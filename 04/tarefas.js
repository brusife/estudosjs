const lista = []
const listaf = document.getElementById('lista')
const check = document.getElementById('conc')

function AdcTarefa() {
    if (tarefa.value !== ""){
        var item = document.createElement('div')
        let tarefa = document.getElementById('tarefa')
        lista.push(tarefa.value)
        item.classList.add('item')
        item.innerHTML = `<div class="conc" onclick="Check(this)"></div>
        <div> ${tarefa.value} </div>`
        listaf.appendChild(item)
        tarefa.value = ""
    }else {
        alert("Digite uma tarefa")
    }
}

function Check(elemento) {
    if (elemento.innerHTML== "") {
        elemento.innerHTML = `
        <img src="../imgs/check.png">`
    } else {
        elemento.innerHTML = ""
    }
  }