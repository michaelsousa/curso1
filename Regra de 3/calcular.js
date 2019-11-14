/**
 * 
 * 
 */

 let perc, num 
 
 function regra(){
    perc=Number(frmRegra3.txtX.value.replace(",","."))
    num=Number(frmRegra3.txtY.value.replace(",","."))

    perc = (num*perc/100)+8
    frmRegra3.txtZ.value = perc    

 }