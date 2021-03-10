/* 1- Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso il for in tutte le proprietà.*/
$(document).ready(function() {

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
        document.getElementById("student").innerHTML += "<li>" + (students[i]["nome"] + " " + students[i]["cognome"]) + "</li>";
    }
    
    /* 3- Dare la possibilità all’utente attraverso 3 prompt di
    aggiungere un nuovo oggetto studente inserendo
    nell’ordine: nome, cognome e età. */
    
    var newStudent = {};

    $("#add_student").click(function() {

        var myName = prompt("Inserisci il nome");
        myName = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
        newStudent.nome = myName;

        var surname = prompt("Inserisci il cognome");
        surname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
        newStudent.cognome = surname;

        var flag = true;
        var age;

        while (flag) {
            age = parseInt(prompt("Inserisci l'età"));
            if (!isNaN(age)) {
                flag = false;
            } else {
                alert("Inserisci un numero per specificare la tua età");
            }
        }
        newStudent.età = age;

        /* Aggiungo il nuovo studente alla lista di studenti */
        students.push(newStudent);

        console.log(newStudent);
        document.getElementById("student").innerHTML += "<li>" + (newStudent["nome"] + " " + newStudent["cognome"]) + "</li>";
        
        console.log(students);
    })
});