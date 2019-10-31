/**
 * Calculo do imc
 * @author Renato Bortoliero
 */

let imc, peso, altura

function calcularImc() {
    peso = Number(frmImc.peso.value.replace(",", "."))
    altura = Number(frmImc.altura.value.replace(",", "."))
    imc = peso / (Math.pow(altura, 2))
    alert(imc.toFixed(2));

    frmImc.result.value = imc.toFixed(2);




}