const assert = require('assert');
const { createMockApplicationContext } = require('../../utilities/TestUtils');
const { NewTodo } = require('./NewTodo');

describe('NewTodo', () => {
    describe('new', () => {
        const mockApplicationContext = createMockApplicationContext({});

        it('Creates a Todo object', () => {
            const newTodo = new NewTodo({
                rawTodo: { description: 'Do me.', }, applicationContext: mockApplicationContext
            });
            assert.ok(newTodo);
        });
    });
});
