/**
 * calculadora PDV - desconto e troco
 * @author Renato Bortoliero
 * 
 */

let total, desconto, valorDesconto, totalDesconto

function descontar() {
    total = Number(frmPdv.txtTotal.value.replace(',', '.'))
    desconto = Number(frmPdv.txtDesconto.value.replace(',', '.'))

    valorDesconto = total * (desconto / 100)
    totalDesconto = total - valorDesconto
    frmPdv.txtDescontado.value = 'R$ ' + valorDesconto.toFixed(2)
    frmPdv.txtPagar.value = 'R$ ' + totalDesconto.toFixed(2)

}
function calcular() {
    let valorPago, valorTroco

    valorPago = Number(frmPdv.valorPgo.value.replace(',', '.'))
    valorTroco = valorPago - totalDesconto
    if (valorPago > totalDesconto) {
        frmPdv.txtFinal.value = 'R$ ' + valorTroco.toFixed(2)
    } else {
        frmPdv.txtFinal.value = 'Caloteiro!'
    }
}