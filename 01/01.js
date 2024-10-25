function gerarLogo(){
    const name = document.getElementById("name")
    const res = document.getElementById('res')
    const select = document.getElementById('tema')
    const selecionado = select.value
    if (name.value == "") {
        alert("Preencha o campo TEXTO...")
    }
    
    else {
        res.setAttribute("class", "")
        if(selecionado == "fut") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resfuturista")
        }
        if(selecionado == "ret") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resretro")
        }
        if(selecionado == "emp") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resemp")
        }
        if(selecionado == "div") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resdiv")
        }
        if(selecionado == "hal") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("reshal")
        }
    }
}
/*
  const opcoes = {
    fut: 'resfuturista',
    ret: 'resretro',
    emp: 'resemp',
    div: 'resdiv',
    hal: 'reshal'
  };

  function gerarLogo() {
    const nome = document.getElementById('name');
    const res = document.getElementById('res');
    const select = document.getElementById('tema');
    const selecionado = select.value;

    if (nome.value.trim() === '') {
      alert('Preencha o campo TEXTO...');
      return;
    }
    
    res.innerHTML = `<h1>${nome.value.trim()}</h1>`;
    res.classList.add(opcoes.selecionado);
  }

  document.getElementById('logo').addEventListener('click', gerarLogo);*/