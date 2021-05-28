//numero casuale utente
var utente=Math.round(Math.random() * 5 + 1);

document.getElementById("utente").innerHTML = "Il dado Utente è: " + utente + ";";

//numero casuale pc
var pc=Math.round(Math.random() * 5 + 1);

document.getElementById("pc").innerHTML = "Il dado PC è: " + pc + ";";

//definizione vincitore
if (utente == pc) {

    document.getElementById('vincitore').innerHTML = '' + 'Pareggio';

} else if (utente > pc) {

    document.getElementById('vincitore').innerHTML = '' + 'Il vincitore è Utente';
} else {

    document.getElementById('vincitore').innerHTML = '' + 'Il vincitore è PC';
}