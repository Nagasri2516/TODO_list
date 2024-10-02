function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    // Add click event to mark the task as complete
    li.onclick = function() {
        this.classList.toggle('completed');
    };

    // Append the new list item to the task list
    taskList.appendChild(li);
    
    // Clear the input field
    taskInput.value = '';
}
