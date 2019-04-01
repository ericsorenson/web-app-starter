/**
 * constructor
 * @param rawTodo
 * @param applicationContext
 * @constructor
 */

function Todo({ rawTodo, applicationContext }) {
    Object.assign(this, rawTodo, {
        createdAt: rawTodo.createdAt || applicationContext.getCurrentTimestamp(),
        todoId: rawTodo.todoId || applicationContext.getUniqueIdString(),
    });
}

module.exports = { Todo };
