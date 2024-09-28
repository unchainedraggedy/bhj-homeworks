const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.setItem('savedText', editor.value);
})

const savedText = localStorage.getItem('savedText');
if(savedText){
    editor.value = savedText;
}