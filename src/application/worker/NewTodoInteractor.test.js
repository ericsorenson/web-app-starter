const assert = require('assert');
const { createMockApplicationContext } = require('../../utilities/TestUtils');
const { newTodo } = require('./NewTodoInteractor');

describe('new valid Todo', () => {
    it('should invoke persistence with the same application context and the correct Todo record', async () => {
        let mockApplicationContext = createMockApplicationContext({
            getUniqueIdString: () => {
                return '413f62ce-d7c8-446e-aeda-14a2a625a626';
            },
            getCurrentTimestamp: () => {
                return 1554070560001;
            },
            getPersistenceGateway: () => ({
                createTodo: (request) => {
                    assert.equal(request.applicationContext, mockApplicationContext);
                    assert.deepStrictEqual(request.todoData, {
                        description: 'Make a sammich.',
                        createdAt: 1554070560001,
                        todoId: '413f62ce-d7c8-446e-aeda-14a2a625a626'
                    });
                },
            })
        });

        const testResponseCallback = (response) => { }

        const brandNewTodo = await newTodo({
            requestData: {
                description: 'Make a sammich.',
            },
            responseCallback: testResponseCallback,
            applicationContext: mockApplicationContext,
        });
    });

    it('should invoke response callback with a success code and new todo data', async () => {
        let mockApplicationContext = createMockApplicationContext({
            getUniqueIdString: () => {
                return '413f62ce-d7c8-446e-aeda-14a2a625a626';
            },
            getCurrentTimestamp: () => {
                return 1554070560001;
            },
        });

        const testResponseCallback = (response) => {
            assert.deepStrictEqual(response, {
                status: 'success',
                data:
                {
                    description: 'Make a sammich.',
                    createdAt: 1554070560001,
                    todoId: '413f62ce-d7c8-446e-aeda-14a2a625a626'
                }
            });
        }

        const brandNewTodo = await newTodo({
            requestData: {
                description: 'Make a sammich.',
            },
            responseCallback: testResponseCallback,
            applicationContext: mockApplicationContext,
        });
    });
});
