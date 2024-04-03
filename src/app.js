/*
* File: hexadecagonter.java
* Author: Bajusz Réka
* Copyright: 2024, Bajusz Réka
* Group: Szoft V
* Date: 2024-04-03
* Github: https://github.com/bajus/
* Licenc: GNU GPL
*/
console.log("Bajusz Réka, I-2-N, 2024-04-03")
console.log("Bekéri a hexadecagonter oldalát és kiszámolja a területét")

const aSideInput = document.querySelector('#aSide')
const teruletId = document.querySelector('#teruletId')
const calcButton = document.querySelector('#calcButton')

calcButton.addEventListener("click", ()=>{
    startCalc();
})
function startCalc(){
    let aSide = Number(aSideInput.value)
    let terulet = calcTerulet(aSide)
    teruletId.value = terulet
}
function calcTerulet(aSide){
    return 4*Math.pow(aSide, 2)*(Math.cos(Math.Pi/16)/Math.sin(Math.Pi/16))
}

