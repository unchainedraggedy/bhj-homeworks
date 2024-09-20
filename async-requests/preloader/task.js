const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';

xhr.onload = () => {
  const data = xhr.response.response.Valute;

  for (let key in data) {
    const currency = data[key];

    const item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML = `
      <div class="item__code">${currency.CharCode}</div>
      <div class="item__value">${currency.Value}</div>
      <div class="item__currency">руб.</div>
    `;

    itemsContainer.appendChild(item);
  }

  loader.classList.remove('loader_active'); 
};

xhr.send();
