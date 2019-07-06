
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL_TODOS, SET_CURRENT_FILTER } from '../constants';
import { FiltersEnum } from '../types';

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
export interface ISetCurrentFilterAction {
  filter: FiltersEnum;
  type: SET_CURRENT_FILTER;
}

export type TodoAction = IAddTodoAction | IToggleTodoAction | IEditTodoAction | IDeleteTodoAction | IToggleAllTodoAction;

export const addTodo = (text: string): IAddTodoAction => ({
  text,
  type: ADD_TODO
});

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

export const toggleAllTodos = (isMarkAll: boolean): IToggleAllTodoAction => ({
  isMarkAll,
  type: TOGGLE_ALL_TODOS
});

export const setCurrentFilter = (filter: FiltersEnum): ISetCurrentFilterAction => ({
  filter,
  type: SET_CURRENT_FILTER
});
