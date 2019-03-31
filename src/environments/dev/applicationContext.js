import uuidv4 from 'uuid/v4';
const { readAllTodos, deleteAllTodos, createTodo } = require('../../persistence/InMemoryPersistenceGateway');

const applicationContext = {
    getUniqueId: () => {
        return uuidv4();
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