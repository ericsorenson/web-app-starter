const assert = require('assert');

const Todo = require('./Todo');

describe('Todo', () => {
    describe('new', () => {
        let mockApplicationContext = {
            getUniqueId: () => {
                return '413f62ce-d7c8-446e-aeda-14a2a625a626';
            },
        };

        it('Creates a Todo object', () => {
            const todo = new Todo({
                description: 'Do me.',
            }, mockApplicationContext);
            assert.equal(todo.description, 'Do me.');
        });
    });
});
