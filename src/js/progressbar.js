//Tar argument och sätter bredd på progressionsmätaren
export function updateProgressBar(progress) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
}

//Visa laddningsindikatorn och sätt mätaren til 0
export function showLoadingIndicator() {
    const loadingIndicatorEl = document.getElementById('loadingIndicator');
    loadingIndicatorEl.style.display = 'block';
    updateProgressBar(0);
}

//Gradvis uppdatering av laddnigsindikatorn med argument för start-%, slut-% och varaktighet
export function gradualUpdateProgressBar(start, end, duration) {
    const stepTime = duration / (end - start);
    let currentProgress = start;
    const interval = setInterval(() => {
        if (currentProgress < end) {
            currentProgress++;
            updateProgressBar(currentProgress);
        } else {
            clearInterval(interval);
        }
    }, stepTime * 1000);
    return interval;
}