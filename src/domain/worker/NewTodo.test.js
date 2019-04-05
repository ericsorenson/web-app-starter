const assert = require('assert');
const {
  createMockApplicationContext,
  createSchemaValidationApplicationContext,
} = require('../../utilities/TestUtils');
const { NewTodo } = require('./NewTodo');

describe('NewTodo', () => {
  describe('new', () => {
    const mockApplicationContext = createMockApplicationContext({});

    it('Creates a Todo object', () => {
      const newTodo = new NewTodo({
        rawTodo: { description: 'Do me.' },
        applicationContext: mockApplicationContext,
      });
      assert.ok(newTodo);
    });
  });

  it('should reject requests with missing description in the requestData', async () => {
    const mockApplicationContext = createSchemaValidationApplicationContext();

    try {
      new NewTodo({
        rawTodo: {},
        applicationContext: mockApplicationContext,
      });
    } catch (e) {
      assert.ok(
        e.message.includes(
          'data should include a description, creation date, and unique id',
        ),
      );
    }
  });

  it('should reject requests with description < 5 characters in the requestData', async () => {
    const mockApplicationContext = createSchemaValidationApplicationContext();

    try {
      new NewTodo({
        rawTodo: { description: 'Do' },
        applicationContext: mockApplicationContext,
      });
    } catch (e) {
      assert.ok(
        e.message.includes(
          'description should be a string at least 5 characters long',
        ),
      );
    }
  });
});
