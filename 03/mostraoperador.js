const op = document.getElementById('res')
const sinal = document.getElementById('sinal')
const resfinal = document.getElementById('resf')
const num1 = document.getElementById('n1')
const num2 = document.getElementById('n2')

function MostraSom() {
    sinal.innerHTML = "<h2>+</h2>"
    op.id="resa"
}

function MostraSub() {
    sinal.innerHTML = "<h2>-</h2>"
    op.id="resa"
}

function MostraMult() {
    sinal.innerHTML = "<h2>X</h2>"
    op.id="resa"
}

function MostraDiv() {
    sinal.innerHTML = "<h2>/</h2>"
    op.id="resa"
}

function Resfinal() {
    if (num1.value === "" || num2.value === ""){
        resfinal.innerHTML = `Impossível fazer esse cálculo, favor preencher um número...`
    }
}