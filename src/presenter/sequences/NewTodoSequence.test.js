import { CerebralTest } from 'cerebral/test';
import { applicationContext } from '../../utilities/TestUtils/createMockApplicationContext';
import { presenter } from '../presenter';

let test;
presenter.providers.applicationContext = applicationContext;

test = CerebralTest(presenter);

describe('NewTodoSequence', () => {
  it('should set invoke the new Todo action', async () => {
    test.setState('workItemActions', {});
    await test.runSequence('NewTodoSequence', {
      action: 'complete',
      workItemId: '123',
    });
    expect(test.getState('workItemActions')).toMatchObject({
      '123': 'complete',
    });
  });
});
