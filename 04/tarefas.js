let input = document.getElementById('tarefa')
let btnAdd = document.getElementById('adc')
let lista = document.getElementById('lista')
input.focus()
let cont= 0

function Adc(){
    let inputcont = input.value
    if (inputcont !=="" && inputcont!==null && inputcont!==undefined) {
        cont ++
        let novoitem = `<div id="${cont}" class="item">
                    <div onclick="Ok(${cont})" class="item-icone">
                        <span id="icone_${cont}" class="mdi mdi-checkbox-blank-outline"></span>
                    </div>
                    <div onclick="Ok(${cont})" class="item-texto">${inputcont}</div>
                    <div onclick="Del(${cont})"  class="item-remover">
                        <span class="mdi mdi-delete"></span>
                    </div>
                </div>`

    lista.innerHTML += novoitem
    input.value = ""
    input.focus()
    }else {
        alert('Por favor, digite uma tarefa, campo vazio... ')
    }
}

function Del(id){
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function Ok(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    if (classe == "item"){
        item.classList.add('feito')

        
        var icone = document.getElementById('icone_'+ id)
        icone.classList.remove('mdi-checkbox-blank-outline')
        icone.classList.add('mdi-check-bold')
        item.parentNode.appendChild(item)

    }else {
        item.classList.remove('feito')
        var icone = document.getElementById('icone_'+ id)
        icone.classList.add('mdi-checkbox-blank-outline')
        icone.classList.remove('mdi-check-bold')
    }
}


input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13){
        event.preventDefault()
        btnAdd.click()
    }
})