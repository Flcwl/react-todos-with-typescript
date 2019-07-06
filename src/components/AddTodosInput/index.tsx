import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';

const mapDispatcherToProps = (dispatch: Dispatch): { addTodo: (text: string) => void } => ({
    addTodo: (text: string) => dispatch(actions.addTodo(text))
});

type ReduxType = ReturnType<typeof mapDispatcherToProps>;

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

export default connect(null, mapDispatcherToProps)(AddTodosInput);
