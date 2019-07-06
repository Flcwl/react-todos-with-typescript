import { TodoAction } from '../actions';
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_ALL_TODOS } from '../constants';
import { ITodo } from '../types';


const todos = (state: ITodo[] = [], action: TodoAction): ITodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          isCompleted: false,
          title: action.text
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo: ITodo, idx: number): ITodo =>
        (idx === action.index)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      );
    case EDIT_TODO:
      return state.map((todo: ITodo, idx: number): ITodo =>
        (idx === action.index)
          ? {...todo, title: action.text}
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo: ITodo, idx: number): boolean =>
        idx !== action.index
      );
    case TOGGLE_ALL_TODOS:
      return state.map((todo: ITodo): ITodo =>
        ({...todo, isCompleted: action.isMarkAll})
      );
    default:
      return state;
  }
};

export default todos;
