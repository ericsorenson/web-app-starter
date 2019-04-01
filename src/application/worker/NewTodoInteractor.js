const { toJSON } = require('../../utilities/ObjectUtils');
const { validateRequest } = require('../InteractorUtils');
const { Todo } = require('../../domain/Todo');

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

    // An interactor owns the interface of the request. It will validate that the requestData is 
    // well-formed using a JSON Schema validator. Detailed validation is handled by entities later.
    const requestDataSchema = {
        "type": "object",
        "properties": {
            "description": { "type": "string" }
        },
        "required": ["description"],
        "additionalProperties": false
    };

    // An interactor validates that the required objects are present.
    validateRequest({ requestData, requestDataSchema, responseCallback, applicationContext });

    // An interactor knows the data strucures of the entities it mediates and assembles
    // those datastructures as approptiate. It doesn't blindly pass them what it receives from its caller.
    const rawTodo = { description: requestData.description };

    // The interactor doesn't know the details of what constitutes valid entitiy data. It relies
    // on entities for that validation.
    const newTodo = new Todo({ rawTodo, applicationContext });

    // Once the entities have done thier work, if the results need to be persisted, the interactor
    // extracts entity data and assebles data records that is passes to the persistencd gateway.
    const todoData = toJSON(newTodo);

    // The interactor invokes a very specific persistence gateway operation.
    applicationContext.getPersistenceGateway().createTodo({ todoData, applicationContext });

    // The interactor invokes a callback (probably in the presenter) to provide results. The
    // function signature should be at the same semantic level as the interactor.
    responseCallback({ status: "success", data: todoData });
};
