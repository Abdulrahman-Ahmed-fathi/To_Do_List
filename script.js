function addTask() {
    const taskTitle = document.getElementById('taskTitle').value.trim();
    const taskContent = document.getElementById('taskContent').value.trim();

    if (taskTitle === '' && taskContent === '') {
        alert('Please add a title or content.');
        return;
    }

    const todoSection = document.getElementById('todoSection');
    const task = createTaskElement(taskTitle, taskContent);

    todoSection.appendChild(task);

    document.getElementById('taskTitle').value = '';
    document.getElementById('taskContent').value = '';
}

function createTaskElement(title, content) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskTitleElement = document.createElement('h2');
    taskTitleElement.textContent = title;

    const taskContentElement = document.createElement('p');
    taskContentElement.textContent = content;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const editButton = document.createElement('button');
    editButton.innerHTML = '✏️';
    editButton.onclick = function() {
        editTask(task, taskTitleElement, taskContentElement);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑️';
    deleteButton.onclick = function() {
        task.remove();
    };

    const finishButton = document.createElement('button');
    finishButton.innerHTML = '✔️';
    finishButton.onclick = function() {
        finishTask(task);
    };

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(finishButton);

    task.appendChild(taskTitleElement);
    task.appendChild(taskContentElement);
    task.appendChild(buttonsDiv);

    return task;
}

function editTask(task, titleElement, contentElement) {
    const newTitle = prompt('Edit Title', titleElement.textContent);
    const newContent = prompt('Edit Content', contentElement.textContent);

    if (newTitle !== null) {
        titleElement.textContent = newTitle;
    }
    if (newContent !== null) {
        contentElement.textContent = newContent;
    }
}

function finishTask(task) {
    const finishedSection = document.getElementById('finishedSection');
    finishedSection.appendChild(task);
    const finishButton = task.querySelector('button:contains("✔️")');
    finishButton.remove();
}
