document.addEventListener('DOMContentLoaded', () => {
    const savedUserId = localStorage.getItem('user_id');

    if (savedUserId) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userIdSpan.innerText = savedUserId;
    }
});

const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');

const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');

const logout = document.getElementById('logout');
const logoutBtn = document.getElementById('logout__btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const xhrPost = new XMLHttpRequest();

    xhrPost.open('POST', form.action);
    xhrPost.send(formData);
    xhrPost.responseType = 'json'

    xhrPost.onload = () => {
        const response = xhrPost.response;
        if (response.success) {
            localStorage.setItem('user_id', response.user_id);
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userIdSpan.innerText = response.user_id;

            form.reset();
        } else {
            alert('Неверный логин и/или пароль');
        }
    };
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user_id');  
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');

    form.reset();
});
