import { CerebralTest } from 'cerebral/test';
// import { applicationContext } from '../../../utilities/TestUtils/createMockApplicationContext';
import { presenter } from '../presenter';

// presenter.providers.applicationContext = applicationContext;

const test = CerebralTest(presenter);

describe('NewTodoSequence', () => {
  it('should set invoke the new Todo action', async () => {
    await test.runSequence('SubmitNewTodoSequence', {
      requestData: {
        description: 'Make a sammich.',
      },
    });
    expect(test.getState('todo')).toMatchObject({
      '123': 'complete',
    });
  });
});
