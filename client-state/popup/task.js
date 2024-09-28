function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; path=/';
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
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
