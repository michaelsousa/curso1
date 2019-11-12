/**
 * Switch Case - Trabalha diretamente com variaveis de 1 caractere (caso 1, 2, 3, 4, 5, 6 / a, b, c, d)
 * 
 *  @author Renato Bortoliero
 */

let pmt
pmt = Math.floor((Math.random() * 6 + 1))
switch (pmt) {
    case 1:
        document.getElementById("face").src = 'face1.png'
        break
    case 2:
        document.getElementById('face').src = 'face2.png'
        break
    case 3:
        document.getElementById('face').src = 'face3.png'
        break
    case 4:
        document.getElementById('face').src = 'face4.png'
        break
    case 5:
        document.getElementById('face').src = 'face5.png'
        break
    case 6:
        document.getElementById('face').src = 'face6.png'
        break
}