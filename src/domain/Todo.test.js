const assert = require('assert');

const { Todo } = require('./Todo');
describe('Todo', () => {
    describe('new', () => {
        let mockApplicationContext = {
            getUniqueIdString: () => {
                return '413f62ce-d7c8-446e-aeda-14a2a625a626';
            },
            getCurrentTimestamp: () => {
                return 1554070560001;
            },
        };

        it('Creates a Todo object', () => {
            const todo = new Todo({
                rawTodo: { description: 'Do me.', }, applicationContext: mockApplicationContext
            });
            assert.ok(todo);
            console.log(todo);
        });
    });
});
