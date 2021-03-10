/* 1- Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.*/

var student = {
    "nome": "Marco",
    "cognome": "Rossi",
    "età": 25
};

for ( var key in student) {
    console.log(key + ": " + student[key]);
}

/* 2- Creare un array di oggetti di studenti.Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome */

var students = [
    {
        "nome": "Luca",
        "cognome": "Bianchi",
        "età": 29
    },
    {
        "nome": "Fabio",
        "cognome": "Verdi",
        "età": 22
    },
    {
        "nome": "Sergio",
        "cognome": "Neri",
        "età": 45
    },
    {
        "nome": "Carlo",
        "cognome": "Marrone",
        "età": 32
    }
];

for (var i = 0; i < students.length; i++) {
    console.log(students[i]["nome"] + " " + students[i]["cognome"]);
}

/* 3- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età. */

    var newStudent = {};

    newStudent.nome = prompt("Inserisci il nome");
    newStudent.cognome = prompt("Inserisci il cognome");
    newStudent.età = prompt("Inserisci l'età");

    console.log(newStudent);

/* Aggiungo il nuovo studente alla lista di studenti */
    students.push(newStudent);

    console.log(students);


