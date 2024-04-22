export { updateDOM };
import { showLoadingIndicator, updateProgressBar, gradualUpdateProgressBar } from './progressbar.js';

window.onload = () => {
    updateDOM();
};

//Hämtar data från api
async function fetchData() {
    showLoadingIndicator();
    //Startar från 10%
    updateProgressBar(10);

    //Uppdaterar från 10% till 90% över 50 sekunder
    const gradualProgress = gradualUpdateProgressBar(10, 90, 50);

    try {
        const response = await fetch(`https://dt207g-mom3-2.onrender.com/workexp/`);
        //Avbryt den gradvisa laddningsindikatorn när svaret har mottagits
        clearInterval(gradualProgress);
        //Nästan klar 95%, väntar på JSON-parsing
        updateProgressBar(95);
        const data = await response.json();
        updateProgressBar(100);
        
        return data;
    } catch (error) {
        clearInterval(gradualProgress);
        console.error('Data kunde inte hämtas', error);
        updateProgressBar(100);
    }
}

//Skriv ut data i DOM
async function updateDOM() {
    try {
        const data = await fetchData();

        const workExpsEl = document.getElementById('workExps');
        //Töm tidigare innehåll
        workExpsEl.innerHTML = '';

        //Iterera över varje objekt och lägger till i DOM
        data.forEach(exp => {
            
            //Formatera datum - ta bort klockslag
            const startDate = exp.startdate.split('T')[0];
            const endDate = exp.enddate.split('T')[0];

            //Skriver ut i DOM
            workExpsEl.innerHTML += `
                <article class="workExp">
                    <h3>${exp.jobtitle} @ ${exp.companyname}</h3>
                    <p><strong>Plats:</strong> ${exp.location}</p>
                    <p><strong>Startdatum:</strong> ${startDate}</p>
                    <p><strong>Slutdatum:</strong> ${endDate}</p>
                    <p><strong>Beskrivning:</strong> ${exp.description}</p>
                    <button class="button deleteBtn" data-id="${exp._id}">Ta bort</button>
                </article>
                <span class="spanLine"></span>
            `;
        });
    } catch (error) {
        console.error('Problem med att uppdatera DOM', error);
    } finally {
        //Dölj laddningsindikatorn
        setTimeout(() => {
            const loadingIndicatorEl = document.getElementById('loadingIndicator');
            loadingIndicatorEl.style.display = 'none';
        }, 700);
    }
}