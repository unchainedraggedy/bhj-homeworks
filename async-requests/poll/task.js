   
   const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
  
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.responseType = 'json';
    xhr.onload = () => {
      const poll = xhr.response;
      pollTitle.textContent = poll.data.title;
  
      poll.data.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answer;
        button.addEventListener('click', () => {
          alert('Спасибо, ваш голос засчитан!');
          const xhrPost = new XMLHttpRequest();
          xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
          xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

          xhrPost.onload = () => {
            const result = JSON.parse(xhrPost.response);
            pollAnswers.innerHTML = '';
            result.stat.forEach(stat => {
              const statEl = document.createElement('div');
              statEl.textContent = `${stat.answer}: ${stat.votes} голосов`;
              pollAnswers.appendChild(statEl);
            });
            console.log(result)
          };
          xhrPost.send(`vote=${poll.id}&answer=${index}`);
        });
        pollAnswers.appendChild(button);
      });
    };
    xhr.send();

  