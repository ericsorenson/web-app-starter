import { state } from 'cerebral';

export const newTodoAction = async ({ applicationContext, store, get }) => {
  const responseCallback = response => {
    if (response.status = "success") {
      store.set('todoPage.todos', response.data);
    }
  };

  applicationContext.getUseCases().newTodo({
    requestData: { description: get(state`todoPage.todoForm.description`) },
    responseCallback,
    applicationContext,
  });
};
