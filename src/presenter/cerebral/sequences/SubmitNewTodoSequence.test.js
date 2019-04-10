import { equal, deepStrictEqual } from 'assert';
import { CerebralTest } from 'cerebral/test';
import { createMockApplicationContext } from '../../../utilities/TestUtils';
import { presenter } from '../presenter';

describe('NewTodoSequence', () => {
  it('should invoke the new Todo use case interactor', async () => {
    const mockApplicationContext = createMockApplicationContext({
      getUseCases: () => ({
        newTodo: request => {
          equal(request.applicationContext, mockApplicationContext);
          deepStrictEqual(request.requestData, {
            description: 'Make a sammich.',
          });
          request.responseCallback(responseData);
        },
      }),
    });

    presenter.providers.applicationContext = mockApplicationContext;
    const test = CerebralTest(presenter);

    await test.runSequence('SubmitNewTodoSequence', {
      requestData: {
        description: 'Make a sammich.',
      },
    });
  });

  it('should add the interactor response to cerebral state', async () => {
    const mockApplicationContext = createMockApplicationContext({
      getUseCases: () => ({
        newTodo: request => {
          request.responseCallback(responseData);
        },
      }),
    });

    presenter.providers.applicationContext = mockApplicationContext;
    const test = CerebralTest(presenter);

    await test.runSequence('SubmitNewTodoSequence', {
      requestData: {
        description: 'Make a sammich.',
      },
    });

    expect(test.getState('todo')).toMatchObject(responseData);
  });
});

const responseData = {
  status: 'success',
  data: {
    description: 'Make a sammich.',
    createdAt: 1554070560001,
    todoId: '413f62ce-d7c8-446e-aeda-14a2a625a626',
  },
}
