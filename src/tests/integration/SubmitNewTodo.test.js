import { CerebralTest } from 'cerebral/test';
import { presenter } from '../../presenter/cerebral/presenter';
import { applicationContext } from '../../environments/dev/ApplicationContext';

describe('New Todo user interaction', () => {
  it('should create a new todo', async () => {
    presenter.providers.applicationContext = applicationContext;
    const test = CerebralTest(presenter);

    test.setState('todoPage.todoForm.description', 'Make a sammich.');
    await test.runSequence('SubmitNewTodoSequence');
    expect(test.getState('todoPage.todos')).toMatchObject([
      { description: 'make lunch' },
      { description: 'make dinner' },
      { description: 'Make a sammich.' },
    ]);
  });
});
