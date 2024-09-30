document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input').value;
  const taskDateTime = document.getElementById('task-date-time').value;

  if (taskInput === '' || taskDateTime === '') {
    alert('Please fill out both the task and the date/time.');
    return;
  }

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.className = 'task-item';

  const taskDetails = document.createElement('div');
  taskDetails.className = 'task-details';

  const taskText = document.createElement('span');
  taskText.textContent = taskInput;

  const taskTime = document.createElement('small');
  taskTime.textContent = `Due: ${new Date(taskDateTime).toLocaleString()}`;

  taskDetails.appendChild(taskText);
  taskDetails.appendChild(taskTime);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.className = 'complete';
  completeButton.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit';
  editButton.addEventListener('click', () => {
    const newTask = prompt('Edit task:', taskText.textContent);
    const newDateTime = prompt('Edit date and time:', taskDateTime);
    if (newTask && newDateTime) {
      taskText.textContent = newTask;
      taskTime.textContent = `Due: ${new Date(newDateTime).toLocaleString()}`;
    }
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(taskDetails);
  li.appendChild(completeButton);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  
  taskList.appendChild(li);

  document.getElementById('task-input').value = '';
  document.getElementById('task-date-time').value = '';
}
