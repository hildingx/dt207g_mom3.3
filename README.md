# Om webbapplikationen
## Av Alexander Hilding

Syftet med den här webbapplikationen är att hantera arbetserfarenheter. Under "Lägg till" kan användaren lägga till en arbetserfarenhet med information om företagsnamn, jobbtitel, plats, start- och slutdatum samt en beskrivning av tjänsten.  
  
Denna information lagras sedan i en postgreSQL-databas och hämtas och visas på förstasidan tillsammans med övriga lagrade arbetserfarenheter. Hämtning sker med fetch-anrop till ett egenkonfigurerat API och skrivs ut i DOM. Lagring av data görs med fetch-anrop med POST-metod. Borttagning görs med DELETE-metod.  
  
På backendsidan används Node.js tillsammans med Express för att skapa ett RESTful API som hanterar alla interaktioner med databasen. Datalagringen sker på PostgreSQL databas deployad på Render.  
  
På frontendsidan används HTML, SCSS och JS.