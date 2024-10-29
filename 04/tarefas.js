const lista = []
const listaf = document.getElementById('lista')

function AdcTarefa() {
    if (tarefa.value !== ""){
        var item = document.createElement('div')
        let tarefa = document.getElementById('tarefa')
        lista.push(tarefa)
        item.classList.add('item')
        item.innerHTML = `<div id="conc"></div><div> ${tarefa.value} </div><div><img src="../imgs/remover.png" alt="" onclick="Remover()"></div>`
        listaf.appendChild(item)
    }else {
        alert("Digite uma tarefa")
    }
};

function Remover() {
    lista.pop()
    
}