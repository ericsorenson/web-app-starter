import { SubmitNewTodoSequence } from './sequences/SubmitNewTodoSequence';
import { updateNewTodoDescription } from './sequences/updateNewTodoDescription';

// Cerebral module
export const presenter = {
  catch: [],
  providers: {},
  sequences: { updateNewTodoDescription, SubmitNewTodoSequence },
  state: {
    todoPage: {
      todos: [{ description: 'make lunch' }, { description: 'make dinner' }],
      todoForm: { description: '' },
    },
  },
};
