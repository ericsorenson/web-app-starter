const { Todo } = require('../domain/Todo');

/**
 *
 * @param rawTodo
 * @param applicationContext
 * @returns {Promise<*>}
 */
exports.newTodo = async ({
    rawTodo,
    responseCallback,
    applicationContext,
}) => {
    try {
        const newTodo = new Todo({
            rawTodo, applicationContext
        });

//        await applicationContext.getPersistenceGateway().createTodo({
//            applicationContext,
//            caseToSave: caseToAdd.validate().toRawObject(),
//        });
        responseCallback({ result: "success", id: newTodo.getId() });
    } catch (error) {
        responseCallback({ result: "fail", message: "you f-ed up dude"});
    }
};
