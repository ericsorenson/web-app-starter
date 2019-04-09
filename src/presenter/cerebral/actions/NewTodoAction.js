import { state } from 'cerebral';

export const newTodoAction = async ({ applicationContext, store, props }) => {
  const responseCallback = response => {
    store.set(state.todo, response);
  };

  applicationContext.getUseCases().newTodo({
    requestData: props.requestData,
    responseCallback,
    applicationContext,
  });
};
