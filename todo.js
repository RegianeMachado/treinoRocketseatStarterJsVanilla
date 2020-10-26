let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

const renderTodos = () => {
    listElement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        let linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href', '#');

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
  
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement)
        listElement.appendChild(linkElement)

        linkElement.appendChild(linkText);
    }
}

renderTodos();

const addTodo = () => {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ''

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

const deleteTodo = pos => {
    todos.splice(pos, 1);
    
    renderTodos();
    saveToStorage();
};

const saveToStorage = () => {
    localStorage.setItem('list_todos', JSON.stringify(todos));

}