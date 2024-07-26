const timer = document.getElementById('timer');

/*
const changeTimer = () => {
    timer.textContent -= 1;
}

setInterval(changeTimer, 1000)
*/

let sec = +timer.textContent

const changeTimer = () => {
    if(sec > 0){
        sec -= 1;
    }

    let hours = Math.floor(sec/3600);
    let minutes = Math.floor((sec%3600)/60);
    let leftSec =  Math.floor(sec%60);

    function toTwo(num){
        return num < 10 ? '0' + num : '' + num;
    }
    let formattedHours = toTwo(hours) + ':' + toTwo(minutes) + ':' + toTwo(leftSec);

    timer.textContent = formattedHours;
}

setInterval(changeTimer, 1000);
