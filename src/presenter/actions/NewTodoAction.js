import { state } from 'cerebral';
// import the resopnseCallback

export const newTodoAction = async ({
  applicationContext,
  get,
  path,
}) => {
  const requestData = { description: get(state.todoform.todo.description) }

    await applicationContext.getUseCases().createWorkItem({
      requestData,
      responseCallback,
      applicationContext,
    });
};

const responseCallback = (response) => {
  console.log(response);
};