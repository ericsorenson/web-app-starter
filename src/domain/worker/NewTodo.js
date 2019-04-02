const { validateRequestData } = require('../../utilities/CleanUtils');
const { toJSON } = require('../../utilities/ObjectUtils');

/**
 * constructor
 * @param rawTodo
 * @param applicationContext
 * @constructor
 */
function NewTodo({ rawTodo, applicationContext }) {
    Object.assign(this, rawTodo, {
        createdAt: rawTodo.createdAt || applicationContext.getCurrentTimestamp(),
        todoId: rawTodo.todoId || applicationContext.getUniqueIdString(),
    });

    // An business object owns the interface of the request. It will validate
    // that the requestData is well-formed using a JSON Schema validator.
    const dataSchema = {
        type: "object",
        properties: {
            description: { type: "string", minLength: 10 },
            createdAt: { type: "number" },
            todoId: { type: "string" },
        },
        required: ["description", "createdAt", "todoId"],
        additionalProperties: true,
        errorMessage: "should send the correct todo data"
    };

    // An object validates that the arguments are as valid as can be determined at this point.
    const entityData = toJSON(this);
    validateRequestData({ data: entityData, dataSchema, applicationContext });
}

module.exports = { NewTodo };
