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
                        <span class="mdi mdi-checkbox-blank-outline"></span>
                    </div>
                    <div class="item-texto">${inputcont}</div>
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
    }else {
        item.classList.remove('feito')
    }
}


input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13){
        event.preventDefault()
        btnAdd.click()
    }
})