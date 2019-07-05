
import { ADD_TODO, SET_CURRENT_FILTER, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL_TODOS } from '../constants';
import { VisibilityFilters } from '../types';

export interface IAddTodoAction {
    text: string;
    type: ADD_TODO;
}

export interface IToggleTodoAction {
    index: number;
    type: TOGGLE_TODO;
}

export interface IEditTodoAction {
  index: number;
  text: string;
  type: EDIT_TODO;
}

export interface IDeleteTodoAction {
  index: number;
  type: DELETE_TODO;
}

export interface IToggleAllTodoAction {
  isMarkAll: boolean;
  type: TOGGLE_ALL_TODOS;
}
export interface ISetVisibilityFilterAction {
    filter: VisibilityFilters;
    type: SET_CURRENT_FILTER;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction | IEditTodoAction | IDeleteTodoAction | IToggleAllTodoAction;

export const addTodo = (text: string): IAddTodoAction => {
  console.log(text);

  return {
    text,
    type: ADD_TODO
  };
};

export const toggleTodo = (index: number): IToggleTodoAction => ({
    index,
    type: TOGGLE_TODO
});

export const deleteTodo = (index: number): IDeleteTodoAction => ({
  index,
  type: DELETE_TODO
});

export const editTodo = (index: number, text: string): IEditTodoAction => ({
  index,
  text,
  type: EDIT_TODO
});


export const setCurrentFilter = (filter: VisibilityFilters): ISetVisibilityFilterAction => ({
    filter,
    type: SET_CURRENT_FILTER
});

export const toggleAllTodos = (isMarkAll: boolean): IToggleAllTodoAction => ({
  isMarkAll,
  type: TOGGLE_ALL_TODOS
});
