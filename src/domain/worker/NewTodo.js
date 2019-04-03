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
  var dataSchema = {
    type: 'object',
    required: ['description', 'createdAt', 'todoId'],
    allOf: [
      {
        properties: {
          description: { type: 'string', minLength: 5 },
          createdAt: { type: 'number' },
          todoId: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
    errorMessage: {
      type: 'data should be an object',
      properties: {
        description:
          'description should be a string at least 5 characters long',
      },
      _: 'data should include a description, creation date, and unique id',
    },
  };

  // An object validates that the arguments are as valid as can be determined at this point.
  const entityData = toJSON(this);
  validateRequestData({ data: entityData, dataSchema, applicationContext });
}

module.exports = { NewTodo };
