/**
 * constructor
 * @param rawTodo
 * @param applicationContext
 * @constructor
 */
function Todo({rawTodo, applicationContext}) {
    Object.assign(this, rawTodo, {
        createdAt: rawTodo.createdAt || new Date().toISOString(),
        messageId: rawTodo.todoId || applicationContext.getUniqueId(),
    });
}

Todo.description = 'task';

module.exports = Todo;
