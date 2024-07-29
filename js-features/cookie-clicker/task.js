document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.getElementById('cookie');
    const clickerCounter = document.getElementById('clicker__counter');
    let counter = +clickerCounter.textContent

    cookie.addEventListener('click', () => {
        counter++;
        clickerCounter.textContent = counter;

        if(cookie.style.width === '200px'){
            cookie.style.width = '100px';
            cookie.style.height = '100px';
        } else {
            cookie.style.width = '200px';
        }
    })
})