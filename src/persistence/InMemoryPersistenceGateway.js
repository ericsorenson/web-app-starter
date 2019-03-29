let todos = [];
const readTodos = function () {
  return todos;
};

const deleteTodos = function () {
  todos = []
};

const createTodo = function (todo) {
  todos.push(todo)
};

module.exports = {readTodos, deleteTodos, createTodo};