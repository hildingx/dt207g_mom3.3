//Händelselyssnare till formulär 
document.getElementById('workExpForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    //Samla in och trimma data från formuläret
    const companyname = document.getElementById('companyname').value.trim();
    const jobtitle = document.getElementById('jobtitle').value.trim();
    const location = document.getElementById('location').value.trim();
    const startdate = document.getElementById('startdate').value.trim();
    const enddate = document.getElementById('enddate').value.trim();
    const description = document.getElementById('description').value.trim();

    const errorEl = document.getElementById('formError');
    const expAddedEl = document.getElementById('expAdded');
    const form = document.getElementById('workExpForm');

    //Rensa tidigare felmeddelanden
    errorEl.textContent = '';
    errorEl.style.display = 'none';
    expAddedEl.textContent = '';
    expAddedEl.style.display = 'none';

    //Validera input för att kontrollera att inga fält är tomma
    if (!companyname || !jobtitle || !location || !startdate || !enddate || !description) {
        errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Alla fält måste fyllas i. <br> Vänligen kontrollera dina inmatningar.';
        errorEl.style.display = 'block';
        return;
    }

    //Skapa objekt med insamlad data från formuläret
    const expObj = { companyname, jobtitle, location, startdate, enddate, description };

    try {
        const response = await fetch('https://dt207g-mom3-2.onrender.com/workexp/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expObj)
        });
        if (!response.ok) {
            errorEl.innerHTML = 'Arbetserfarenheten kunde inte läggas till';
            errorEl.style.display = 'block';
        } else {
            expAddedEl.innerHTML = 'Arbetserfarenhet tillagd <i class="fas fa-check"></i>';
            expAddedEl.style.display = 'block';
            //Rensa formuläret
            form.reset();
        }
    } catch (error) {
        console.error('Det gick inte att lägga till arbetserfarenheten:', error);
        errorEl.textContent = 'Arbetserfarenheten kunde inte läggas till.';
        errorEl.style.display = 'block';
    }
});