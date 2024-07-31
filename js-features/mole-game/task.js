const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

const clicker = mole => {
    if(mole.target.classList.contains('hole_has-mole')){
      dead.textContent = +dead.textContent + 1
    } else {
        lost.textContent = +lost.textContent + 1
    }

    if(+dead.textContent === 9){
        dead.textContent = 0;
        lost.textContent = 0;
        alert('Вы выиграли!')
    }
    if(+lost.textContent === 5){
        dead.textContent = 0;
        lost.textContent = 0;
        alert('Бадум-тс)))): Попробуйте ещё')
    }
}

for(let i = 1; i <= 9; i++){
    getHole(i).addEventListener('click', clicker);
}






