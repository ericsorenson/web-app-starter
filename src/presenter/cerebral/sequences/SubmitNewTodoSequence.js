import { newTodoAction } from '../actions/NewTodoAction';

export const setNewTotoSequence = [
  showProgressIndicatorAction,
  newTodoAction,
  getTodosAction,
  setTodosPresenter,
  resetTodoFormAction,
  hideProcessIndicator,
];
