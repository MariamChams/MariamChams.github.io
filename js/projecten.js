// array met projecten
const projecten = [
    {
        titel: "Hotelsimulatie",
        afbeelding: "media/hotel2.png",
        alt: "Voorbeeld van de hotelsimulatie",
        technieken: ["Java", "Git", "Agile/Scrum"],
        categorie: "groep",
        beschrijving: "Een hotelsimulatie waarmee hotelontwerpers verschillende hotelindelingen kunnen testen voordat deze worden gerealiseerd."
    },

    {
        titel: "Koop/bied voor jouw droom villa",
        afbeelding: "media/p5.png",
        alt: "Voorbeeld van het villa biedplatform",
        technieken: ["HTML", "CSS", "PHP", "SQL"],
        categorie: "zelfstandig",
        beschrijving: "Een website waar je een bod kunt bieden op een villa. De drie hoogste biedingen worden weergegeven, samen met het totaal aantal biedingen, foto's, locatie en andere details."
    },

    {
        titel: "Stand By Saver",
        afbeelding: "media/p24.2.jpg",
        alt: "Voorbeeld van Stand By Saver",
        technieken: ["Git", "Embedded", "Micro-bit"],
        categorie: "groep",
        beschrijving: "In het kader van SDG 7 ontwikkelden wij een Standby Saver om onnodig energieverbruik tegen te gaan. Met behulp van een micro:bit schakelt het systeem een apparaat automatisch uit wanneer het langer dan 10 seconden niet wordt gebruikt."
    }
];

// defineert en haalt grid uit html
// later plaatsen we hier projecten
const projectenGrid = document.getElementById("projecten-grid");

// defineert knoopjes 
// deze worden later filter
const allesKnop = document.getElementById("alles");
const groepKnop = document.getElementById("groep");
const zelfstandigKnop = document.getElementById("zelfstandig");





// deze functie laat alle projecten van array zien
// lijst ontvangt de functie
function toonProjecten(lijst) {

    // verwijder oude kaart voordat neiuwe toont 
    // maak de projectenGrid dus eerst leeg 
    projectenGrid.textContent = "";

    // met forEach voert die de code 1 voor 1 van de projecten
    // en de huidige item heeft dus project
    lijst.forEach(function(project) {

        // maak element (articel)
        const kaart = document.createElement("article");
        // geef het de class project-kaart
        kaart.className = "project-kaart";

        // maak element (div)
        const fotoDiv = document.createElement("div");
        // geef het de class prject-foto naam
        fotoDiv.className = "project-foto";



        // maak element (img)
        const afbeelding = document.createElement("img");
       // pak de source van de array van afbeeldingen
        afbeelding.src = project.afbeelding;
      // pak de alt van de array van afbeeldingen
        afbeelding.alt = project.alt;


        // maak element (div)
        const techniekenDiv = document.createElement("div");
        // geef het de jusite klasse naam
        techniekenDiv.className = "technieken";
        // ga door technieken een voor een uit de array
        project.technieken.forEach(function(techniek) {
            // maak van elke een apparte span element
            const span = document.createElement("span");
            // in de span zet de techniek
            span.textContent = techniek;
            // zet de (span) binnen (techniekenDiv) zo komen ze er in niet onder
            techniekenDiv.appendChild(span);
        });


        // maak element (h2) voor title
        const titel = document.createElement("h2");
        // geef het waarde
        titel.textContent = project.titel;

        // maak element (p)voor beschijving
        const beschrijving = document.createElement("p");
        // geef het de waarde
        beschrijving.textContent = project.beschrijving;

        // zet de afbeelding in fotoDiv
        fotoDiv.appendChild(afbeelding);

        // en alle de onderdelen in kaart
        kaart.appendChild(fotoDiv);
        kaart.appendChild(techniekenDiv);
        kaart.appendChild(titel);
        kaart.appendChild(beschrijving);

        // en kaart in projectenGrid
        projectenGrid.appendChild(kaart);
    });
}




// filter catagorie
// alles knop die toont ook alles
allesKnop.addEventListener("click", function() {
    toonProjecten(projecten);
});

// kijk wanneer op knop wordt gedrukt
groepKnop.addEventListener("click", function() {
    // maak nieuwe lijst met alleen projecten uit catagorie (groep)
    const groepProjecten = projecten.filter(function(project) {
        // controleer of de catagorie gelijk is aan groep
        return project.categorie == "groep";
    });
    // toon projecten binnen deze catagorie
    toonProjecten(groepProjecten);
});

// knop van zelfstandig gedrukt
zelfstandigKnop.addEventListener("click", function() {
    const zelfstandigProjecten = projecten.filter(function(project) {
        return project.categorie == "zelfstandig";
    });
    // toon projecten binnen deze catagorie
    toonProjecten(zelfstandigProjecten);
});





// roep de functie
toonProjecten(projecten);