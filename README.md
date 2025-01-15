# JS-gruppuppgift

## Beskrivning av projektet - skrevs efter projektet

Vår grupp består av Ferenc, Melvin, Niklas, Rita, Arwin, Mohammed & Ella, och tillsammans byggde vi en applikation som fungerar som en respeplanerare. Designen är en Single Page Application (SPA) eller en "multi-step form" som består av sju sidor:
- Input-formulär med användarens önskade destination, Ritas ansvar
- Input-formulär med användarens nuvarande plats, Arwins ansvar
- Användaren väljer avresedatum, Niklas ansvar
- Användaren väljer transportmedel, Mohammeda ansvar
- Användaren fyller i en bucketlist över händelser som den önskar uträtta på resmålet, Ferenc ansvar
- Man får tillgång till resan i en lista, samt möjligheten att lägga till en resa och bli skickad till första sidan, Ellas ansvar

Syftet med vår reseplanerare är att den ska vara en disruptiv applikation i sitt skrå, som hjälper användaren att slippa vända sig till många applikationer med olika syften för att planera flera resor samtidigt. Man får med att-göra-lista och transportmedel och tack vare listan får användaren lätt översikt över sina framtida resor.

Vi spånade fram idén tillsammans i ett Teams-möte och gjorde en enkel wireframe. Därefter delades arbetet upp, som ansvarslistan ovan. Utöver det hade Melvin ansvar över Localstorage/Session Storage implementation, och genomföra test med vitest. 

Ferenc och Melvin har betydelsefullt mer erfarenhet i Javascript, och hjälpte samtliga andra medlemmar att avsluta och felsöka alla sidor i projektet och hade stor översikt. Parprogrammering förekom i form av Teams-möten vid flera tillfällen.

## Produktbeskrivning - skrevs innan projektet
Vi bygger en webbplats som ska ha en fungerande reseplanerare.
Den ska dynamiskt lägga till/ändra HTML-element. Första intrycket användaren får är texten "Vart vill du resa?" och när användaren skrivit in sitt svar i en input-ruta så möts den av frågan "Vart reser du ifrån?". Efter användaren har svarat på den frågan läggs resan med start och destination högst upp i en lista. Om användaren lägger till fler resmål, läggs resorna till i listan. Man kan ta bort och ändra i listan. 


## Instruktioner för att skapa en javascript fil och koppla till HTML-filen
1. Skapa en ny javascript fil i mappen scripts.
2. I javascript filen skriver du din kod i en funktion som du sedan exporterar med hjälp av export. ex `export const functionName = () => { // code }`
3. I script.js filen skriver du `import { functionName } from './scripts/filnamn.js'` för att importera funktionen.
4. Använd funktionen init() för att köra koden när sidan laddas.
5. Om du vill att funktionen ska köras vid ett specifikt event, skriv `document.querySelector('#idNamn').addEventListener('event', functionName)`. Om du jobbar med form och vill att funktionen ska köras när formuläret skickas, skriv `document.querySelector('#idNamn').addEventListener('submit', functionName)`.
6 I html-filen skriver du in en unik id på elementet som du vill att funktionen ska köras på. ex `<form id="idNamn"></form>`
7. Finns exempel på detta i filen /scripts/test.js som har en funktion som heter testAlert().
