/**
 *  Jogo da Pedra Papel tesoura
 *  @author Renato Bortoliero
 */
let jogador =0;
let computador;
let pointP =0;
let pointC =0;

function jogar() {
    if (document.getElementById("pedra").checked === true) {
        jogador = 1
    } else if (document.getElementById("papel").checked === true) {
        jogador = 2
    } else if (document.getElementById("tesoura").checked === true) {
        jogador = 3
    }

    if (jogador != 0) {
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
    } else {
        alert("Jogador necessita escolher uma opção!")

    }

    if (jogador === computador) {
        document.getElementById("resultado").innerText = 'Empate!'
    } else if (jogador == 1 && computador == 2 || jogador == 2 && computador == 3 || jogador == 3 && computador == 1) {
        document.getElementById("resultado").innerText = 'PC Ganhou!'
        pointC =pointC +1
    } else if (jogador == 1 && computador == 3 || jogador == 2 && computador == 1 || jogador == 3 && computador == 2) {
        document.getElementById("resultado").innerText = 'Jogador Ganhou!'
        pointP =pointP+1
    }

    

    if (pointP ==3 ){
        alert('Você Ganhou!')
        pointP =0
        pointC =0
    } else if (pointC ==3){
        alert( 'Computador Ganhou!')
        pointP =0
        pointC =0
    }
    document.getElementById("placar").innerText = 'Jogador:'+pointP+' x '+pointC+':Computador'

    
}

function resetar() {
    document.getElementById("resultado").innerText = ''
    document.getElementById("comp").src = "pc.png"
    jogador = 0;
    pointP = 0 ;
    pointC = 0 ;
    document.getElementById("placar").innerText = 'Jogador:0 x 0:Computador'
}


