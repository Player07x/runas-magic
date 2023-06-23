let num = [1,1]

function focoMagico() {
    let foco
    foco = document.getElementById('foco')
    switch (foco.value) {
        case '1':
            focoElemental()
            break
        case '2':
            focoArcano()
            break
        case '3':
            focoDivino()
            break
        default:
            window.alert('Falha')
    }
}

function focoElemental() {
    let divMagic = document.getElementById('divMagic')
    num = [1,1]
    divMagic.innerHTML = 
        '<p>Descrição: <input type="text"></p>'+
        '<p>Tipo: <select name="" id="">'+
            '<option value="">Magia Rápida</option>'+
            '<option value="">Feitiço</option>'+
            '<option value="">Aura</option>'+
        '</select></p>'+
        '<p>Ampliação 1: <input type="text"><br><div id="extensaoA"></div>'+
        '<button id="botaoAmp" onclick="criarExtensao(1)">+Ampliação</button></p>'+
        '<p>Redução 1: <input type="text"><br> <div id="extensaoR"></div>'+
        '<button id="botaoRed" onclick="criarExtensao(2)">+Redução</button></p>'
}

function focoArcano() {
    let divMagic = document.getElementById('divMagic')
    num = [1,1]
    divMagic.innerHTML = 
        '<p>Descrição: <input type="text"></p>'+
        '<p>Tipo: <select name="" id="">'+
            '<option value="">Magia Rápida</option>'+
            '<option value="">Feitiço</option>'+
            '<option value="">Aura</option>'+
            '<option value="">Ritual</option>'+
            '<option value="">Encantamento</option>'+
        '</select></p>'+
        '<p>Qualidade: <input type="text"><br>'+
        '<p>Defeito: <input type="text"><br>'

}

function focoDivino() {
    let divMagic = document.getElementById('divMagic')
    num = [1,1]
    divMagic.innerHTML = 
        '<p>Descrição: <input type="text"></p>'+
        '<p>Tipo: <select name="" id="">'+
            '<option value="">Benção</option>'+
            '<option value="">Milagre</option>'+
        '</select></p>'+
        '<p>Divindades: <input type="text" name="" id=""></p>'+
        '<p>Bônus de Divindade: <input type="text"><br>'+
        '<p>Punição: <input type="text"><br>'
}

function criarExtensao(tipo) {
    let extensao, botao
    extensao = document.createElement('p')
    botao = [document.querySelector('button#botaoAmp'), document.querySelector('button#botaoRed')]
    switch (tipo) {
        case 1:
            num[0]++
            extensao.innerHTML = `Ampliação ${num[0]}: <input type="text"><br>`
            document.getElementById('extensaoA').appendChild(extensao)
            break
        case 2:
            num[1]++
            extensao.innerHTML = `Redução ${num[1]}: <input type="text"><br>`
            document.getElementById('extensaoR').appendChild(extensao)
            break
    }
    if (num[0] > 4 && botao[0] != null)  {
            botao[0].remove()
        } else if (num[1] > 4 && botao[1] != null) {
            botao[1].remove()
    } 
}
