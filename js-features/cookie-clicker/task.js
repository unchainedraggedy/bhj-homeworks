document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.getElementById('cookie');
    const clickerCounter = document.getElementById('clicker__counter');
    const clicksPerSecond = document.getElementById('clicks-per-second_span');
    let counter = +clickerCounter.textContent
    let intervalId;
   

    let timeThen = Date.now()
    let clicksSecondsCounter = 0;

    cookie.addEventListener('click', () => {
        counter++;
        clickerCounter.textContent = counter;
        const timeNow = Date.now();

        if((timeNow - timeThen) > 0){
            clicksSecondsCounter = 1 / ((timeNow - timeThen) / 1000);

        }
        clicksPerSecond.textContent = Math.floor(clicksSecondsCounter);

        if(cookie.style.width === '200px'){
            cookie.style.width = '100px';
            cookie.style.height = '100px';
        } else {
            cookie.style.width = '200px';
        }

        timeThen = timeNow;
    })
    intervalId = setInterval(() => {
        clicksPerSecond()
    }, 1000)
})

