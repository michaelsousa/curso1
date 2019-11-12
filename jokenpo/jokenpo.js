/**
 *  Jogo da Pedra Papel tesoura
 *  @author Renato Bortoliero
 */
let jogador
let computador

function jogar() {
    if (document.getElementById("pedra").checked === true) {
        jogador = 1
    } else if (document.getElementById("papel").checked === true) {
        jogador = 2
    } else if (document.getElementById("tesoura").checked === true) {
        jogador = 3
    }

    computador = Math.floor((Math.random() * 3 + 1))
    switch (computador) {
        case 1:
            document.getElementById("comp").src = 'pcpedra.png'
            break
        case 2:
            document.getElementById("comp").src = 'pcpapel.png'
            break
        case 3:
            document.getElementById("comp").src = 'pctesoura.png'
            break

    }

    if (jogador === computador) {
        document.getElementById("resultado").innerText = 'Empate!'
    } else if (jogador == 1 && computador == 2 || jogador == 2 && computador == 3 || jogador == 3 && computador == 1) {
        document.getElementById("resultado").innerText = 'PC Ganhou!'
    } else if (jogador == 1 && computador == 3 || jogador == 2 && computador == 1 ||jogador == 3 && computador == 2) {
        document.getElementById("resultado").innerText = 'Jogador Ganhou!'
    } else {
        document.getElementById("resultado").innerText = 'escolha algo, puto!'
    }
}

function resetar(){
    document.getElementById("resultado").innerText = ''
    document.getElementById("comp").src = "pc.png" 
    jogador =0;
}


