/**
 * 
 * 
 */


$(document).ready(function () {
   $('ul li img').hover (function(){
    $('ul li img').not(this).stop().fadeTo(40,0.1)
   },function(){
    $('ul li img').not(this).stop().fadeTo(400,1)
   })
})  