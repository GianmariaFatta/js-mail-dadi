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
        console.log(randomNumber);
        
    }
    resultElement.innerHTML= array[0];
    resultPcElement.innerHTML= array[1];
    if(array[0]>array[1]){
        winnerElement.innerHTML=`<h2 class="text-success">Jimmy Win</h2>`;
    }else if (array[0]<array[1]){
        winnerElement.innerHTML=`<h2 class="text-danger">PC Win</h2>`
    }else{ winnerElement.innerHTML=`<h2 class="text-info">DRAW</h2>`};
})




// ESERCIZIO 2 - Finta Login
// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mailElement= document.getElementById("mail")
const submitElement=document.getElementById("submit")
const accessElement=document.getElementById("access")

const validMail= ["jimmy@palermo.com","jimmy@sicilia.com","jimmy@italia.com"];




submitElement.addEventListener("click", function(){
    
    if( mailElement.value === validMail[0] || mailElement.value === validMail[1] || mailElement.value === validMail[2] )
    {
    accessElement.innerHTML=`<h2 class="text-success">Welcome back Sir</h2>`;
    mailElement.value=""
    }
    else{
        accessElement.innerHTML=`<h2 class="text-danger">YOU SHALL NOT PASS!!!</h2>`
    }






   
})