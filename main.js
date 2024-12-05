// Dichiarazione delle variabili globali

let countdown; // Variabile per memorizzare l'intervallo del timer
let remainingTime = 0; // Variabile per tenere traccia del tempo rimanente
let isPaused = false; // Variabile per tracciare lo stato di pausa





// Selezione degli elementi HTML che utilizzeremo

const timeInput = document.querySelector('#timeInput'); // Input per inserire i secondi
const countdownDisplay = document.querySelector('#countdownDisplay'); // Display per mostrare il countdown
const startButton = document.querySelector('#startButton'); // Pulsante per avviare il countdown
const pauseButton = document.querySelector('#pauseButton'); // Pulsante per mettere in pausa il countdown
const resetButton = document.querySelector('#resetButton'); // Pulsante per resettare il countdown




// Funzione per avviare il countdown quando si clicca sul pulsante "Avvia"
startButton.addEventListener('click', function () {
    let seconds = parseInt(timeInput.value); // tramite "value" ottengo il valore che l'utente andrà a inserire e lo inserisco nella variabie seconds
    // tutti i tag input hanno un attributo nascosto che è appunto il value, ossia il valore scritto in input dall'utente
    //  parseInt() viene utilizzata per convertire una stringa (come il valore che l'utente inserisce nell'input) in un numero intero
    if (isNaN(seconds) || seconds <= 0) {  // Controllo se seconds ossia la variabile in cui andremo a salvare il valore dell'utente sia effettivamente un numero!
        alert('Valore non valido!!!');
        return; // Esce dalla funzione se il valore non è valido
        //  isNaN è una funzione di JavaScript "is Not a Number", verifica se il valore passato (ossia seconds) non è un numero valido
    }

    // Se il timer non è in pausa, aggiorna remainingTime con i secondi inseriti
    if (!isPaused) {
        remainingTime = seconds;
    }

    // Visualizza i secondi iniziali nel display
    // textContent: È una proprietà che rappresenta il testo contenuto all'interno dell'elemento. Se viene impostata, il testo visualizzato nell'elemento HTML cambia
    countdownDisplay.textContent = remainingTime;

    // La funzione clearInterval(countdown) serve per fermare un intervallo (timer) che è stato precedentemente avviato con la funzione setInterval(). In sostanza, interrompe il ciclo che esegue ripetutamente una funzione a intervalli regolari, come nel caso del countdown, per evitare conflitti e fa si che il timer sia impostato correttamente a zero
    clearInterval(countdown);

    countdown = setInterval(function () {
        // setInterval() è una funzione di JavaScript che esegue una funzione ripetutamente a intervalli regolari, in questo caso ogni 1000 millisecondi
        remainingTime--; // Decrementa il numero di secondi
        countdownDisplay.textContent = remainingTime; // Aggiorniamo il display dove vengono visualizzati i secondi con la variabile remainingTime

        // Quando il countdown raggiunge 0, ferma il timer 
        if (remainingTime <= 0) {
            clearInterval(countdown); // Ferma il timer
        }
    }, 1000); // Esegue la funzione ogni 1000 millisecondi che equivalgono a 1 secondo
    isPaused = false; // Imposta isPaused su false ogni volta che si avvia
});




// funzione per mettere in pausa all'evento click fai scattare qualcosa...
pauseButton.addEventListener('click', function () {
    if (isPaused) {
        countdown = setInterval(function () { // Riavvia il countdown
            remainingTime--; // Decrementa il tempo rimanente
            countdownDisplay.textContent = remainingTime; // Aggiorna il display

            // Quando il countdown raggiunge 0, ferma il timer
            if (remainingTime <= 0) {
                clearInterval(countdown); // Ferma il timer
            }
        }, 1000); // Esegue la funzione ogni 1000 millisecondi che equivalgono a 1 secondo
    } else {
        clearInterval(countdown); // Ferma il countdown
    }
    isPaused = !isPaused; // Inverti lo stato di pausa
});




resetButton.addEventListener('click', function () {
    clearInterval(countdown); // Ferma il timer
    countdownDisplay.textContent = '0'; // Resetta il display
    timeInput.value = ''; // Cancella l'input
    remainingTime = 0; // Resetta il tempo rimanente
    isPaused = false; // Reimposta lo stato su non in pausa
});
