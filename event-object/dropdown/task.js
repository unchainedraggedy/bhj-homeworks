

const dropdown = document.getElementsByClassName('dropdown')[0]; 
const dropdownValue = document.getElementsByClassName('dropdown__value')[0];
const dropdownList = document.getElementsByClassName('dropdown__list')[0];
const dropdownItems = document.getElementsByClassName('dropdown__item');

dropdownValue.addEventListener('click', () => {
    if (dropdownList.classList.contains('dropdown__list_active')) {
            dropdownList.classList.remove('dropdown__list_active');
    } else {
            dropdownList.classList.add('dropdown__list_active');
    }
});

for (let j = 0; j < dropdownItems.length; j++) {
    const item = dropdownItems[j];
    item.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = item.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
}
