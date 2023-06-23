let num = [1,1]

function focoMagico() {    
    let foco, divmagic
    foco = document.getElementById('foco')
    divmagic = [
        document.getElementById('elemental'), 
        document.getElementById('arcano'),
        document.getElementById('divino')
    ]
    switch(foco.value) {
        case '1':
            divmagic[0].style.display = 'block'
            divmagic[1].style.display = 'none'
            divmagic[2].style.display = 'none'
        break
        case '2':
            divmagic[0].style.display = 'none'
            divmagic[1].style.display = 'block'
            divmagic[2].style.display = 'none'
        break
        case '3':
            divmagic[0].style.display = 'none'
            divmagic[1].style.display = 'none'
            divmagic[2].style.display = 'block'
        break
    } 
}

function criarExtensao(tipo) {
    let extensao, botao
    extensao = document.createElement('p')
    botao = [document.querySelector('button#botaoAmp'), document.querySelector('button#botaoRed')]
    switch (tipo) {
        case 'Ampliação':
            num[0]++
            extensao.innerHTML = `Ampliação ${num[0]}: <input type="text"><br>`
            document.getElementById('extensaoA').appendChild(extensao)
            break
        case 'Redução':
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
