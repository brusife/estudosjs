let diasemana = document.getElementById('diasemana')
let diames = document.getElementById('diames')
let hora = document.getElementById('hora')
let msg = document.getElementById('mensagem')

function Relogio() {
    let chora = new Date()
    let horaformatada = chora.toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    let data = new Date()
    let dataf = new Date()
    dataformatada = dataf.toLocaleDateString("pt-BR")
    let diamest = data.getDay()
    let dias = ['Domingo', "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

    diasemana.innerHTML = dias[diamest]
    diames.innerHTML = dataformatada
    hora.innerHTML= horaformatada

    let horaatual = chora.getHours()

    if (horaatual > 6 && horaatual < 12) {
        msg.innerHTML = `<span class="mdi mdi-weather-sunset"></span> Bom dia`
    } if (horaatual >= 12 && horaatual < 18) {
        msg.innerHTML = `<span class="mdi mdi-weather-cloudy"></span> Boa tarde`
    } if (horaatual >=18) {
        msg.innerHTML = `<span class="mdi mdi-moon-waning-crescent"></span> Boa noite`
    } if (horaatual < 6) {
        msg.innerHTML = `<span class="mdi mdi-sleep"></span> Boa madrugada`
    }

}

setInterval(Relogio, 1000)