document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const input = document.getElementById('task-input');
    const list = document.getElementById('task-list');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = input.value.trim();
      if (!taskText) return;
      createTaskElement(taskText);
      input.value = '';
    });
  
    function createTaskElement(text) {
      const li = document.createElement('li');
  
      const taskSpan = document.createElement('span');
      taskSpan.className = 'task-content';
      taskSpan.textContent = text;
  
      // Buttons
      const doneBtn = document.createElement('button');
      doneBtn.textContent = '✓';
      doneBtn.title = 'Mark as done';
      doneBtn.className = 'btn btn-done';
      doneBtn.addEventListener('click', () => {
        li.classList.toggle('done');
      });
  
      const editBtn = document.createElement('button');
      editBtn.textContent = '✎';
      editBtn.title = 'Edit task';
      editBtn.className = 'btn btn-edit';
      editBtn.addEventListener('click', () => {
        startEditTask(li, taskSpan);
      });
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = '✕';
      removeBtn.title = 'Remove task';
      removeBtn.className = 'btn btn-remove';
      removeBtn.addEventListener('click', () => {
        li.remove();
      });
  
      li.appendChild(taskSpan);
      li.appendChild(doneBtn);
      li.appendChild(editBtn);
      li.appendChild(removeBtn);
      list.appendChild(li);
    }
  
    function startEditTask(li, span) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
  
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          span.textContent = input.value.trim() || span.textContent;
          li.replaceChild(span, input);
        } else if (e.key === 'Escape') {
          li.replaceChild(span, input);
        }
      });
  
      li.replaceChild(input, span);
      input.focus();
    }

    function doneTask(li) {
        li.classList.toggle('done');
        if (li.classList.contains('done')) {
            li.style.backgroundColor = 'lightgreen';
        } else {
            li.style.backgroundColor = '';
        }
    }
  });
  