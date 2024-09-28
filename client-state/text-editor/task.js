const editor = document.getElementById('editor');
const card = document.getElementsByClassName('card')[0];

editor.addEventListener('input', () => {
    localStorage.setItem('savedText', editor.value);
});

editor.value = localStorage.getItem('savedText') || '';

const btn = document.createElement('button');
btn.style.display = 'block';
btn.innerText = 'очистить';
card.appendChild(btn);

btn.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem('savedText');
});
