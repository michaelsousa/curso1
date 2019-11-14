/**
 * 
 * 
 * 
 */

let idade
 function verificar(){
    idade = idd.value;


    if (idade < 16 ){
        alert ('Não pode votar')        
        
    }else if (idade >=16 && idade < 18 || idade >=70 ){
        alert ('Facultativo')

    } else {
        alert ('Tem que vota!')
        
    }
 }