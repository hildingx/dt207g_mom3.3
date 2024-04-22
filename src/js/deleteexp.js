//Importera funktion för att uppdatera DOM
import { updateDOM } from './main.js';

//Händelselyssnare vid klick med funktion som tar bort specifik post i db med delete-metod
document.addEventListener('click', async (event) => {
    //Kontroll för klick på delete-knapp
    if (event.target.classList.contains('deleteBtn')) {
        //Hämta id på target klick
        const id = event.target.getAttribute('data-id');
        try {
            //Fetchanrop med deleteförfrågan med id't
            const response = await fetch(`https://dt207g-mom3-2.onrender.com/workexp/${id}`, {
                method: 'DELETE',
            });

            //Kontroll om förfrågan ok
            if (!response.ok) {
                //Om inte - "skapa" ett fel
                throw new Error('Kunde inte ta bort posten');
            }

            alert('Arbetserfarenhet borttagen');
            //Uppdatera listan av arbetserfarenheter
            updateDOM();
        } catch (error) {
            console.error('Det gick inte att ta bort arbetserfarenheten:', error);
            alert(error.message);
        }
    }
});