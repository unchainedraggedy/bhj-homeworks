document.addEventListener('DOMContentLoaded', () => {
    const clickerCounter = document.getElementById('clicker__counter');
    const cookie = document.getElementById('cookie');
    let counter = 0;

    cookie.addEventListener('click', () => {
        counter++;
        clickerCounter.textContent = counter;

        if (cookie.style.width === '200px' || cookie.style.width === '') {
            cookie.style.width = '100px';
            cookie.style.height = '100px';
        } else {
            cookie.style.width = '200px';
            cookie.style.height = '200px';
        }
    });
});
