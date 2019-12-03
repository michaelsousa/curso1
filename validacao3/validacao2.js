

$(document).ready(function(){
    $('#frmCadastro').validate({
        rules:{
            nome:{
                required: true,
                minlength: 4
            },
            email:{
                required: true,
                email: true
            },
            senha:{
                minlength:8
            },
            senhaConfirmacao:{
                equalTo: senha
            }


        },

        messages:{
            nome:{
                required:" Favor digitar o Nome " ,
                minlength: " O nome deve ter ao menos 4 caracteres"
            },
            
            email:{
                required: " Email Obrigatorio",
                email: " Digite um email valido"
            }
        }
    })
})