const assert = require('assert');

const { readAllTodos, deleteAllTodos, createTodo } = require('./InMemoryPersistenceGateway');

describe('inMemoryStorageClient', () => {
    let mockApplicationContext = {};
    describe('readTodos()', () => {
        it('returns no todos when no todos have been created', () => {
            deleteAllTodos(mockApplicationContext)
            const todos = readAllTodos(mockApplicationContext)
            assert.deepStrictEqual(todos, []);
        });
        it('returns todos when todos have been created', () => {
            createTodo({ todoData: { description: 'do good things' }, applicationContext: mockApplicationContext })
            const todos = readAllTodos()
            assert.ok(todos.length > 0);
        });
    });
    describe('createTodos()', () => {
        it('creates todo', () => {
            deleteAllTodos()
            createTodo({ todoData: { description: 'do more good things' }, applicationContext: mockApplicationContext })
            const todos = readAllTodos()
            assert.deepStrictEqual(todos, [{ description: 'do more good things' }]);
        });
    });
    describe('deleteAllTodos()', () => {
        it('deletes all todos', () => {
            deleteAllTodos(mockApplicationContext)
            createTodo({ todoData: { description: 'do more good things' }, applicationContext: mockApplicationContext })
            createTodo({ todoData: { description: 'do even more good things' }, applicationContext: mockApplicationContext })
            const someTodos = readAllTodos(mockApplicationContext)
            assert.deepStrictEqual(someTodos, [{ description: 'do more good things' }, { description: 'do even more good things' }]);
            deleteAllTodos(mockApplicationContext)
            const noTodos = readAllTodos(mockApplicationContext)
            assert.ok(noTodos.length == 0);
        });
    });
});
