/**
*
* @param options
*/
function createMockApplicationContext(options) {
    return {
        getUniqueIdString: () => {
            return '413f62ce-d7c8-446e-aeda-14a2a625a626';
        },
        getCurrentTimestamp: () => {
            return 1554070560001;
        },
        getJsonValidator: () => ({
            validate: (_data, _schema) => { },
        }),
        getPersistenceGateway: () => ({
            createTodo: (_request) => { },
            readAllTodos: (_applicationContext) => { },
            deleteAllTodos: (_applicationContext) => { },
        }),
        ...options,
    };
}

module.exports = { createMockApplicationContext };