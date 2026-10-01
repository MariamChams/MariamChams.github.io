// hier komt de weer melding "weer wordt geladen of kan neit geladen"
const weerMelding = document.getElementById("weer-melding");

// tempratuur komt hier
const temperatuur = document.getElementById("temperatuur");
// wind info
const wind = document.getElementById("wind");

// emoji
const weerEmoji = document.getElementById("weer-emoji");
// het hele vakje (straks verandert die van kleur)
const weerVak = document.getElementById("weer");





// ophalen en tonen van het weer
// async en await
async function haalWeerOp() {
    // zichtbare loading state, staat in eisen
    weerMelding.textContent = "Weer wordt geladen...";

    
    // stuur verzoek naar open meteo voor cordinaten van denhaag. eis opdr: haal extern gegevens op met fetch
   // fetch haalu die op van internet
    const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.08&longitude=4.31&current=temperature_2m,wind_speed_10m"
    );

    // kijken of het ophalen gelukt is
    if (!response.ok) {
        weerMelding.textContent = "Het weer kon niet worden geladen.";
        return;
    }

    // gegevens ontavngen omzetten naar javascript
    const data = await response.json();

    const temp = data.current.temperature_2m;
    const windSnelheid = data.current.wind_speed_10m;




    // tekst laten zien
    weerMelding.textContent = "";

    temperatuur.textContent =
        "Temperatuur: " + temp + " °C";

    wind.textContent =
        "Windsnelheid: " + windSnelheid + " km/u";







    // emoji en kleur kiezen
    if (temp < 10) {
        weerEmoji.textContent = "❄️";
        weerVak.className = "weer-koud";

    } else if (temp < 20) {
        weerEmoji.textContent = "☁️";
        weerVak.className = "weer-bewolkt";

    } else {
        weerEmoji.textContent = "☀️";
        weerVak.className = "weer-zonnig";
    }
}


// functie starten
haalWeerOp();