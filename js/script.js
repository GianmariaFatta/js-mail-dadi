// ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato

const resultElement=document.getElementById("result")
const resultPcElement =document.getElementById("result-pc")
const button=document.getElementById("roll")
const winnerElement=document.getElementById("winner")

button.addEventListener("click", function(){
    const array =[]
    for (let i = 0; i<=1 ; i++){
        //generiamo numero random da 1 a 6
        const randomNumber = [Math.floor(Math.random () *6)+1];
        array.push(randomNumber)
        console.log(randomNumber)
        
        // const rollTwice=randomNumber[1]
        
    }
    resultElement.innerHTML= array[0]
    resultPcElement.innerHTML= array[1]

    
    if(array[0]>array[1]){
        winnerElement.innerHTML=`<h2 class="text-success">Jimmy Win</h2>`;
    }else if (array[0]<array[1]){
        winnerElement.innerHTML=`<h2 class="text-danger">PC Win</h2>`;
    }else{ winnerElement.innerHTML=`<h2 class="text-info">DRAW</h2>`}
    




    
})
