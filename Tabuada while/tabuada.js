/***
 * 
 * 
 */
 function gerar(){
    let max = tab.ate.value
    let j=1;

 while (j<=max){
    let i = 0
    document.writeln('____ Tabuada do '+j+' ____'+'<br>')
    while (i<=10){
        document.writeln(j+' vezes '+i+ ' é igual a '+ i*j+'<br>')

        i++
        } 
    j++
}
 }