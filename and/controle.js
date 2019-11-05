/**
 * 
 * 
 */

let pmt, pmm
let sw1 = false
let sw2 = false

function broken(pmm) {
if (pmm==1){
    document.getElementById("lamp").src = "broken.jpg"
    function sw(pmt) {
        if (pmt == 1 && sw1 == false) {
            document.getElementById("sw1").src = "swon.png"
            sw1 = true;
        } else if (pmt == 1 && sw1 == true) {
            document.getElementById("sw1").src = "swoff.png"
            sw1 = false
        } else if (pmt == 2 && sw2 == false) {
            document.getElementById("sw2").src = "swon.png"
            sw2 = true;
        } else {
            document.getElementById("sw2").src = "swoff.png"
            sw2 = false
        }}

} else {
    function sw(pmt) {
        if (pmt == 1 && sw1 == false) {
            document.getElementById("sw1").src = "swon.png"
            sw1 = true;
        } else if (pmt == 1 && sw1 == true) {
            document.getElementById("sw1").src = "swoff.png"
            sw1 = false
        } else if (pmt == 2 && sw2 == false) {
            document.getElementById("sw2").src = "swon.png"
            sw2 = true;
        } else {
            document.getElementById("sw2").src = "swoff.png"
            sw2 = false
        }
    }
    

        if (sw2 && sw1) {
            document.getElementById("lamp").src = "on.jpg"
        }
        else {
            document.getElementById("lamp").src = "off.jpg"
        }
    }
 
}