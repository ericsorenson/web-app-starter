let todos = [];
const readAllTodos = function() {
  return todos;
};

const deleteAllTodos = function() {
  todos = [];
};

const createTodo = function({ todoData }) {
  todos.push(todoData);
};

module.exports = { readAllTodos, deleteAllTodos, createTodo };
