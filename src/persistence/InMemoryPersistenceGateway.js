let todos = [];
const readAllTodos = function(applicationContext) {
    return todos;
};

const deleteAllTodos = function(applicationContext) {
    todos = [];
};

const createTodo = function({ todoData, applicationContext }) {
    console.log("creating record: " + JSON.stringify(todoData));
    todos.push(todoData);
};

module.exports = { readAllTodos, deleteAllTodos, createTodo };