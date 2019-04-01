let todos = [];
const readAllTodos = function(applicationContext) {
    return todos;
};

const deleteAllTodos = function(applicationContext) {
    todos = [];
};

const createTodo = function({ todoData, applicationContext }) {
    todos.push(todoData);
};

module.exports = { readAllTodos, deleteAllTodos, createTodo };