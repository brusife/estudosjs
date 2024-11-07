function gerarLogo(){
    const name = document.getElementById("name")
    const res = document.getElementById('res')
    const select = document.getElementById('tema')
    const bot = document.getElementById('salvar')
    const tlogo = document.getElementById('logo')
    const selecionado = select.value
    name.focus()
    if (name.value.trim() === "") {
        alert("[ERRO] - Tente novamente escrevendo alguma coisa...")
    }
    
    else {
        
        res.setAttribute("class", "")
        bot.setAttribute("class", "")
        tlogo.setAttribute("value", "Outra figurinha")
        if(selecionado == "fut") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resfuturista")
            bot.classList.add("salvarat")
        }
        if(selecionado == "ret") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resretro")
            bot.classList.add("salvarat")
        }
        if(selecionado == "emp") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resemp")
            bot.classList.add("salvarat")
        }
        if(selecionado == "div") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resdiv")
            bot.classList.add("salvarat")
        }
        if(selecionado == "hal") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("reshal")
            bot.classList.add("salvarat")
        }if(selecionado == "mot") {
            res.innerHTML = `<h1>${name.value}</h1>`
            res.classList.add("resmot")
            bot.classList.add("salvarat")
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