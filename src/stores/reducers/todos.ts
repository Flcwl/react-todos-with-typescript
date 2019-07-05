import { TodoAction } from '../actions';
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL_TODOS } from '../constants';
import { Todo } from '../types';


const todos = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('reducer add todo');

      return [
        ...state,
        {
          isCompleted: false,
          title: action.text
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo: Todo, idx: number): Todo =>
        (idx === action.index)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      );
    case EDIT_TODO:
      return state.map((todo: Todo, idx: number): Todo =>
        (idx === action.index)
          ? {...todo, title: action.text}
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo: Todo, idx: number): boolean =>
        idx !== action.index
      );
    case TOGGLE_ALL_TODOS:
      return state.map((todo: Todo): Todo =>
        ({...todo, isCompleted: action.isMarkAll})
      );
    default:
      return state;
  }
};

export default todos;
