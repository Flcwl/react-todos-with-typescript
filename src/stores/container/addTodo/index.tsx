import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addTodo } from '../../actions';

import { AddTodosInput } from '../../../components/AddTodosInput';
import { Todo } from '../../types';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: any): { todos: Todo[] } => ({
  todos: state.todos
});

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch) => ({
    addTodo: (text: string) => dispatch(addTodo(text))
});

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

// 使用 connect 高阶组件对 Counter 进行包裹
export const AddTodo = connect(mapStateToProps, mapDispatcherToProps)(AddTodosInput);
