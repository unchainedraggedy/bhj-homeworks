// function setCookie(name, value){
//     document.cookie = name + '=' + encodeURIComponent(value);
// }

// const modal = document.getElementById('subscribe-modal');
// const modalClose = document.getElementsByClassName('modal__close')[0];

// modalClose.addEventListener('click', () => {
//     modal.classList.remove('modal_active');
//     setCookie('modalClosed', 'true')
// });

// function getCookie(name){
//     const cookies = document.cookie.split('; ');
//     for(let cookie of cookies){
//         const [cookieName, cookieValue] = cookie.split('=');
//         if(cookieName === name){
//             return cookieValue
//         }
//     }
// }

// if(!getCookie('modalClosed')){
//     modal.classList.add('modal_active')
// }


function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return undefined;

}
const modal = document.getElementById('subscribe-modal');
const closeModal = document.getElementsByClassName('modal__close')[0];

if (!getCookie('modalClosed')) {
    modal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modalClosed', 'true'); 
});