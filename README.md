# Om webbapplikationen
## Av Alexander Hilding

Syftet med den här webbapplikationen är att hantera arbetserfarenheter. Under "Lägg till" kan användaren lägga till en arbetserfarenhet
med information om företagsnamn, jobbtitel, plats, start- och slutdatum samt en beskrivning av tjänsten.

Denna information lagras sedan i en NoSQL-databas, MongoDB, hostad på MongoDB Atlas. 
Data hämtas och visas på startsidan där alla lagrade arbetserfarenheter presenteras. Hämtningen sker med fetch-anrop till ett anpassat API, 
och data lagras med hjälp av POST-metoden medan borttagning av data hanteras via DELETE-metoden.

och hämtas och visas på förstasidan tillsammans med övriga lagrade arbetserfarenheter via Render. Som administrationsverktyg har Compass använts.
Hämtning sker med fetch-anrop till ett egenkonfigurerat API och skrivs ut i DOM. Lagring av data görs med fetch-anrop med POST-metod. Borttagning görs med DELETE-metod.

På backendsidan används Node.js och Express för att skapa ett RESTful API som hanterar alla interaktioner med databasen, vilken är deployad via Render.

På frontendsidan används HTML, SCSS och JS för att skapa användargränssnittet.

Webbaplikationen är publicerad på https://deluxe-dango-d2fa5c.netlify.app/