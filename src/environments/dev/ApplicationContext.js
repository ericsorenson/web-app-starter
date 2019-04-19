const { newTodo } = require('../../application/worker/NewTodoInteractor');
const uuidv4 = require('uuid/v4');
const { validateJson } = require('../../utilities/AjvJsonValidator');
const {
  readAllTodos,
  deleteAllTodos,
  createTodo,
} = require('../../persistence/InMemoryPersistenceGateway');

const applicationContext = {
  getUniqueIdString: () => {
    return uuidv4();
  },
  getCurrentTimestamp: () => {
    return Date.now();
  },
  getJsonValidator: () => {
    return {
      validateJson,
    };
  },
  getPersistenceGateway: () => {
    return {
      createTodo,
      readAllTodos,
      deleteAllTodos,
    };
  },
  getUseCases: () => {
    return {
      newTodo,
    };
  },
};

export { applicationContext };
