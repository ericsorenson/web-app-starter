import { state } from 'cerebral';
// import the resopnseCallback

const responseCallback = response => {
  console.log(response);
};

const promiseWrapper = (requestData, responseCallback, applicationContext) => {
  return new Promise(function(resolve) {
    const callback = () => {
      resolve(responseCallback());
    };
    applicationContext.getUseCases().createWorkItem({
      requestData,
      callback,
      applicationContext,
    });
  });
};

export const newTodoAction = async ({ applicationContext, get }) => {
  const requestData = { description: get(state.todoform.todo.description) };

  // applicationContext.getUseCases().createWorkItem({
  //   requestData,
  //   responseCallback,
  //   applicationContext,
  // });

  const results = await promiseWrapper(
    requestData,
    responseCallback,
    applicationContext,
  );
  return results;
};
