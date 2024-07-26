const timer = document.getElementById('timer');

const changeTimer = () => {
    timer.textContent -= 1;
}

setInterval(changeTimer, 1000)