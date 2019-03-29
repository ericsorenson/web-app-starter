const { newTodo } = require('./NewTodoInteractor');

describe('new valid Todo', () => {
    it('should invoke persistence and callback success with a new id.', async () => {
        let mockApplicationContext = {
            getUniqueId: () => {
                return '413f62ce-d7c8-446e-aeda-14a2a625a626';
            },
        };

        const brandNewTodo = await newTodo({
            rawTodo: {
                description: 'Make a samminch.',
            },
            mockApplicationContext,
            function(response) {
                console.log(response);
            },
        });
    });
});
