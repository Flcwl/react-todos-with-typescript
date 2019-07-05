import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';
import { Todo } from '../../stores/types';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: any): { todos: Todo[] } => ({
  todos: state.todos
});

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch) => ({
    addTodo: (text: string) => dispatch(actions.addTodo(text))
});

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

export class AddTodosInput extends React.Component<ReduxType> {

  /**
   * 用户输入todo按键处理，回车添加
   * @param event 按键事件对象
   */
  public handleKeyDown = (event :React.KeyboardEvent<HTMLInputElement>) => {
    event.persist();

    const $Input: any = event.target;
    const val = $Input.value.trim();

    if (event.keyCode !== 13 || !val) {
      return;
    }

    this.props.addTodo(val);
    $Input.value = '';
  }

  public render() {
    console.log(this.props);

    return (
      <form action="javascript:void(0);" id="new-todo-form">
        <input
          type="text"
          className="new-todo"
          placeholder="input your todo."
          onKeyDown={this.handleKeyDown}
          autoFocus={true}
        />
      </form>
    );
  }
}

// 使用 connect 高阶组件对 Counter 进行包裹
export const AddTodo = connect(mapStateToProps, mapDispatcherToProps)(AddTodosInput);
