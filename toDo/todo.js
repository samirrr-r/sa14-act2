const form = document.getElementById('form');
const taskTitleInput = document.getElementById('name');
const taskDetailsInput = document.getElementById('content');
const taskList = document.getElementById('list')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskTitle = taskTitleInput.value.trim();
    const taskDetails = taskDetailsInput.value.trim();
    add(taskTitle, taskDetails);
    taskTitleInput.value = '';
    taskDetailsInput.value = '';
  });
  
  function add(title, details) {
    console.log("add")

    const li = document.createElement('li');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    
    li.textContent = title;
    const detailsSpan = document.createElement('span');
    detailsSpan.textContent = ` - ${details}`;
    li.appendChild(detailsSpan);
    
  
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      edit(li, title, details);
    });
  
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        console.log("delete")
      taskList.removeChild(li);
    });
  
    li.appendChild(editButton);
    li.appendChild(deleteButton);
  
    taskList.appendChild(li);
  }
  
  function edit(li, title, details) {
    console.log("edit")

    const editForm = document.createElement('form');
    const titleInput = document.createElement('input');
    const detailsInput = document.createElement('input');
    const saveButton = document.createElement('button');
  
    titleInput.value = title;
    detailsInput.value = details;
  
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', function(event) {
        console.log("save")
        event.preventDefault();
        const newTitle = titleInput.value.trim();
        const newDetails = detailsInput.value.trim();
        li.textContent = newTitle;
        const detailsSpan = document.createElement('span');
        detailsSpan.textContent = ` - ${newDetails}`;
        li.appendChild(detailsSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    });
  
    editForm.appendChild(titleInput);
    editForm.appendChild(detailsInput);
    editForm.appendChild(saveButton);
    li.innerHTML = '';
    li.appendChild(editForm);
  }