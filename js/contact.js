// maak form aan 
// zoek in html naar de id contact-form
const form = document.getElementById("contact-form");

const naam = document.getElementById("naam");
const email = document.getElementById("email");
const bericht = document.getElementById("bericht");

const naamFout = document.getElementById("naam-fout");
const emailFout = document.getElementById("email-fout");
const berichtFout = document.getElementById("bericht-fout");

const succesmelding = document.getElementById("succesmelding");

// event listner 
// luistert naar wnr form wordt verstuurd
form.addEventListener("submit", function(event) {


    // niet meteen pagina laden 
    // eerst controle
    // meldingen worden getoond
    event.preventDefault();


    // veerwijder foutmeldingen die oud zijn
    // voor dat validatie dus plaats vindt/opnieuw
    naamFout.textContent = "";
    emailFout.textContent = "";
    berichtFout.textContent = "";
    succesmelding.textContent = "";


    // naam
    // verwijder spaties begin en eind
    if (naam.value.trim() == "") {
        // foutmelding als die leeg is
        naamFout.textContent = "Vul je naam in.";
        // ook bij aria
        naam.setAttribute("aria-invalid", "true");
      
        return;
    }

    // naam
    // controleer dat naam langer is dan 3 letters
    if (naam.value.trim().length < 3) {
        naamFout.textContent = "Naam moet minimaal 3 letters bevatten.";
        naam.setAttribute("aria-invalid", "true");

        return;
    }

    // naam
    // regular expressions gebruikt voor letters validatie
    const naamPatroon = /^[A-Za-zÀ-ÿ ]+$/;

    if (naamPatroon.test(naam.value.trim()) == false) {
        naamFout.textContent = "Naam mag alleen letters bevatten.";
        naam.setAttribute("aria-invalid", "true");

        return;
    }

    // als je niet in de fout komt, aria false
    naam.setAttribute("aria-invalid", "false");


    
    // email
    // verwijder spatie
    // weer foutmedlign zoasl boven
    if (email.value.trim() == "") {
        emailFout.textContent = "Vul je e-mailadres in.";
        email.setAttribute("aria-invalid", "true");

        

        return;
    }


    // regular expressions patroon
    const emailPatroon = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (emailPatroon.test(email.value.trim()) == false) {
        emailFout.textContent = "Vul een geldig e-mailadres in, bijvoorbeeld naam@gmail.com";
        email.setAttribute("aria-invalid", "true");

        return;
    }

    email.setAttribute("aria-invalid", "false");



    // bericht
    // weer controlle
    if (bericht.value.trim() == "") {
        berichtFout.textContent = "Vul een bericht in.";
        bericht.setAttribute("aria-invalid", "true");

        return;
    }


    if (bericht.value.trim().length < 10) {
        berichtFout.textContent = "Bericht moet minimaal 10 tekens bevatten.";
        bericht.setAttribute("aria-invalid", "true");

        return;
    }

    bericht.setAttribute("aria-invalid", "false");


    // Alles is goed

    succesmelding.textContent = "Het formulier is correct ingevuld.";

});