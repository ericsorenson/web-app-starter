const uuidv4 = require('uuid/v4');
const { validate } = require('../utilities/AjvJsonValidator');
const { readAllTodos, deleteAllTodos, createTodo } = require('../../persistence/InMemoryPersistenceGateway');

const applicationContext = {
    getUniqueIdString: () => {
        return uuidv4();
    },
    getCurrentTimestamp: () => {
        return Date.now();
    },
    getJsonValidator: () => {
        return {
            validate,
        };
    },
    getPersistenceGateway: () => {
        return {
            createTodo,
            readAllTodos,
            deleteAllTodos,
        };
    },
};

export { applicationContext };