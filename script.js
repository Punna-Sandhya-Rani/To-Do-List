document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed');
        });
        taskItem.appendChild(checkbox);
        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        taskItem.appendChild(deleteButton);
        
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
    }
}