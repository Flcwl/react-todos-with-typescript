import * as React from 'react';

export class AddTodosInput extends React.Component<{
  handleValue: (title :string) => void
}> {

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

    $Input.value = '';
    this.props.handleValue(val);
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

export default AddTodosInput;
