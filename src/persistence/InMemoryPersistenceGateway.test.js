const assert = require('assert');

const {readTodos, deleteTodos, createTodo} = require('./InMemoryPersistenceGateway');

describe('inMemoryStorageClient', () => {
  describe('readTodos()', () => {
    it('returns no todos when no todos have been created', () => {
      deleteTodos()
      const todos = readTodos()
      assert.deepStrictEqual(todos, []);
    });
    it('returns todos when todos have been created', () => {
      createTodo('do good things')
      const todos = readTodos()
      assert.ok(todos.length > 0);
    });
  });
  describe('createTodos()', () => {
    it('creates todo', () => {
      deleteTodos()
      createTodo('do more good things')
      const todos = readTodos()
      assert.deepStrictEqual(todos, ['do more good things']);
    });
  });
  describe('deleteTodos()', () => {
    it('deletes all todos', () => {
      deleteTodos()
      createTodo('do more good things')
      createTodo('do even more good things')
      const someTodos = readTodos()
      assert.deepStrictEqual(someTodos, ['do more good things', 'do even more good things']);
      deleteTodos()
      const noTodos = readTodos()
      assert.ok(noTodos.length == 0);
    });
  });
});
