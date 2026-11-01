// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const list = document.querySelector('ul');

const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.add-btn');
const form = document.querySelector('form');
const todoInput = document.querySelector('form input');

let nextId = 6;
addButton.addEventListener('click', function () {
  dialog.showModal();
});

for (let i = 0; i < todoList.length; i++) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';

  input.type = 'checkbox';
  input.id = 'todo-' + todoList[i].id;
  input.checked = todoList[i].completed;

  label.htmlFor = 'todo-' + todoList[i].id;
  label.textContent = todoList[i].task;

  input.addEventListener('change', function () {
    todoList[i].completed = input.checked;
    console.log(todoList);
  });

  deleteButton.addEventListener('click', function () {
    todoList.splice(i, 1);
    list.removeChild(li);
    console.log(todoList);
  });

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteButton);
  list.appendChild(li);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const newTodo = {
    id: nextId,
    task: todoInput.value,
    completed: false,
  };

  todoList.push(newTodo);
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const deleteButton = document.createElement('button');

  deleteButton.textContent = 'delete';

  input.type = 'checkbox';
  input.id = 'todo-' + newTodo.id;
  input.checked = newTodo.completed;

  label.htmlFor = 'todo-' + newTodo.id;
  label.textContent = newTodo.task;

  input.addEventListener('change', function () {
    newTodo.completed = input.checked;
    console.log(todoList);
  });

  deleteButton.addEventListener('click', function () {
    const index = todoList.indexOf(newTodo);
    todoList.splice(index, 1);
    list.removeChild(li);
    console.log(todoList);
  });

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(deleteButton);
  list.appendChild(li);

  console.log(todoList);

  nextId++;

  form.reset();
  dialog.close();
});
