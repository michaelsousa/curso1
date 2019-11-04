/**
 * Calculo do Qual combustivel compensa mais
 * @author Renato Bortoliero
 */

let Gasolina, Etanol, Resultado;

 function calcular(){
    Gasolina = Number(frmCombustivel.gas.value.replace(",", "."))
    Etanol = Number(frmCombustivel.eta.value.replace(",", "."))
    Resultado = Etanol / Gasolina

    if(Resultado < 0.7) {
        document.getElementById("status").src="alco.png"
        }
    else if (Resultado > 0.7 ) {
        document.getElementById("status").src="gasolina.png"
        }
    else {
        document.getElementById("status").src="neutro.png"

        }

 }

 function limpar(){

    document.getElementById("status").src="neutro.png"

 }