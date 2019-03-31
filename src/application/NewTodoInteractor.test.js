const assert = require('assert');
const { newTodo } = require('./NewTodoInteractor');

describe('new valid Todo', () => {
    it('should invoke persistence and callback success with a new id.', async () => {
        let mockApplicationContext = {
            getUniqueId: () => {
                return '413f62ce-d7c8-446e-aeda-14a2a625a626';
            },
            getPersistenceGateway: () => ({
                createTodo: (createRequest) => {
                    assert.ok(createRequest);
                    console.log(createRequest);
                },
            }),
        };

        const testCallback = (response) => {
            assert.ok(response);
        }

        const brandNewTodo = await newTodo({
            requestData: {
                description: 'Make a sammich.',
            },
            responseCallback: testCallback,
            applicationContext: mockApplicationContext,
        });
    });
});
