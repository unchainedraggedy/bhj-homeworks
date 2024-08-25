const taskInput = document.querySelector('.tasks__input');
const taskAddButton = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = document.createElement('div');
        task.classList.add('task');

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskText;

        const taskRemove = document.createElement('a');
        taskRemove.href = '#';
        taskRemove.classList.add('task__remove');
        taskRemove.innerHTML = '&times;';

        taskRemove.addEventListener('click', () => {
            task.remove();
        });

        task.appendChild(taskTitle);
        task.appendChild(taskRemove);
        tasksList.appendChild(task);
        taskInput.value = '';
    }
}

taskAddButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask(e);
    }
});
