/**
 * constructor
 * @param rawTodo
 * @param applicationContext
 * @constructor
 */

function Todo({ rawTodo, applicationContext }) {
    this.description = "default";
    Object.assign(this, rawTodo, {
        createdAt: rawTodo.createdAt || new Date().toISOString(),
        messageId: rawTodo.todoId || applicationContext.getUniqueId(),
    });
}

module.exports = { Todo };
