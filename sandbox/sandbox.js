var total = document.getElementById('tot')
var tot = Number(total.innerText)

function adc() {
        tot ++
        total.innerHTML = `<b>${tot}</b>`
    if (tot > 30){
        tot --
        total.innerHTML = `<b>${tot}</b>`
        alert('Limite de 30 itens no máximo')
    }
};

function limpar(){
    tot = 0
    total.innerHTML = `${tot}`
}