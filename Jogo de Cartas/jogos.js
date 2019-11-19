/**
 * Jogo de cartas - Exemplo de importancia de array
 * @author Renato Bortoliero 
 */

let faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let nipes = ['♦', '♠', '♥', '♣'];
let f = faces[Math.floor(Math.random() *13)]
let n = nipes[Math.floor(Math.random() *4)]

document.write('Sorteio:<br>')
document.write(f + n )

document.write('<br><br><br>BARALHO COMPLETO:')
for (let i in faces) {
    document.write('<br>'+'___________________'+'<br>')
    for (let j in nipes) {
        document.write(faces[i] + nipes[j] + ' || ')
        j++
    }
i++
}