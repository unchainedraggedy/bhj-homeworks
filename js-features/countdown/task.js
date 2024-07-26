const timer = document.getElementById('timer');

/*
const changeTimer = () => {
    timer.textContent -= 1;
}

setInterval(changeTimer, 1000)
*/

let seconds = +timer.textContent

const changeTimer = () => {
    if (seconds > 0) {
        seconds -= 1;
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let leftSec = seconds % 60;

    let hoursToHours = (hours < 10 ? '0' : '') + hours;
    let minutesToMinutes = (minutes < 10 ? '0' : '') + minutes;
    let secToSec = (leftSec < 10 ? '0' : '') + leftSec;

    const formattedTime = hoursToHours + ':' + minutesToMinutes + ':' + secToSec;

    timer.textContent = formattedTime;
}

setInterval(changeTimer, 1000);
