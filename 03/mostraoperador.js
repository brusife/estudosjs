const op = document.getElementById('res')
const sinal = document.getElementById('sinal')
const resfinal = document.getElementById('resf')
const num1 = document.getElementById('n1')
const num2 = document.getElementById('n2')

function MostraSom() {
    sinal.innerHTML = "<h2>+</h2>"
    resfinal.innerHTML = ""
    op.id="resa"
    num1.value = ""
    num2.value = ""
}

function MostraSub() {
    sinal.innerHTML = "<h2>-</h2>"
    resfinal.innerHTML = ""
    op.id="resa"
    num1.value = ""
    num2.value = ""
}

function MostraMult() {
    sinal.innerHTML = "<h2>X</h2>"
    resfinal.innerHTML = ""
    op.id="resa"
    num1.value = ""
    num2.value = ""
}

function MostraDiv() {
    sinal.innerHTML = "<h2>/</h2>"
    resfinal.innerHTML = ""
    op.id="resa"
    num1.value = ""
    num2.value = ""
}

function Resfinal() {
    let v1 = Number(num1.value)
    let v2 = Number(num2.value)
    let soma = v1 + v2
    let sub = v1 - v2
    let mult = v1 * v2
    let div = v1 / v2
    if (num1.value === "" || num2.value === ""){
        resfinal.innerHTML += `Impossível fazer esse cálculo, favor preencher um número...`
    } else {
        if (sinal.innerHTML == "<h2>+</h2>") {
            resfinal.innerHTML = `${v1} + ${v2} = ${soma}`
        }
        if (sinal.innerHTML == "<h2>-</h2>") {
            resfinal.innerHTML = `${v1} - ${v2} = ${sub}`
        }
        if (sinal.innerHTML == "<h2>X</h2>") {
            resfinal.innerHTML = `${v1} X ${v2} = ${mult}`
        }
        if (sinal.innerHTML == "<h2>/</h2>") {
            resfinal.innerHTML = `${v1} / ${v2} = ${div}`
        }
    }
}
