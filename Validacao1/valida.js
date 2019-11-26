/**
 * Validação simples com JS
 * @author REnaTO BORtoLIEro
 */

 function validacao(){
    let formulario = document.forms.frmCadastro
    let nome = formulario.txtNome.value
    let CPF = formulario.txtCPF.value
    let sexo = formulario.sexo.value
    let perfil = formulario.txtPerfil.value
    let erro = false;

    if (nome.indexOf(' ') === -1 ) {
        alert("Digite o nome completo")
        erro=true
    }
    if (CPF.length !=11) {
        alert("Digite o CPF " + CPF)
        erro=true
    }
    if (perfil.length < 20 ) {
        alert("Digite pelo menos 20 caract.")
        erro=true
    }
  
    if (erro){
        return false
    } else {
        return true
    }
 }