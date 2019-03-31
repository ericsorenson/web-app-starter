const { toJSON } = require('../utilities/ObjectUtils');
const { validateRequest } = require('./InteractorUtils');
const Todo = require('../domain/Todo');

/**
 *
 * @param requestData
 * @param applicationContext
 * @param responseCallback
 * @returns {Promise<*>}
 */
exports.newTodo = async ({
    requestData,
    responseCallback,
    applicationContext,
}) => {

    const todoInputSchema = {
        "type": "object",
        "properties": {
            "description": { "type": "string" }
        },
        "required": ["description"],
        "additionalProperties": false
    };

    validateRequest({ requestData, responseCallback, applicationContext });

    const rawTodo = { description: requestData.description };
    const newTodo = new Todo({rawTodo, applicationContext});
    const todoData = toJSON(newTodo);

    console.log(todoData);

    applicationContext.getPersistenceGateway().createTodo({
        todoData,
        applicationContext
    });

    responseCallback({ status: "success" });
};
