function gerarLogo(){
    let name = document.getElementById("name")
    let res = document.getElementById('res')
    let select = document.getElementById('tema')
    let selecionado = select.value
    if (name.value == "") {
        alert("Preencha o campo TEXTO...")
    }else {
        if(selecionado == "fut") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.id="resfuturista"
        }
        if(selecionado == "ret") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.id="resretro"
        }
        if(selecionado == "emp") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.id="resemp"
        }
        if(selecionado == "div") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.id="resdiv"
        }
    }
}