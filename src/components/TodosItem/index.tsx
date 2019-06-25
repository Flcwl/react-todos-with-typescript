import * as React from 'react';

export class TodosItem extends React.Component<{
  id: number;
  title: string;
  isCompleted: boolean;

  toggleTodo: (idx :number) => void;
  deleteTodo: (idx :number) => void;
  editItem: (idx :number, title :string) => void;
}> {

  public state = {
    isEditing: false
  };

  public deleteItem = () => {
    this.props.deleteTodo(this.props.id);
  }

  public handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  }

  public toggleEdit = () => {
    // 已完成：不可编辑
    if (this.props.isCompleted) {
      return;
    }
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  /**
   * 编辑已存在todoText（输入框 回车保存）
   */
  public handleEditKeyDown = (e :React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as any).value.trim();

    if(value && e.key === 'Enter') {
      this.toggleEdit();
      this.props.editItem(this.props.id, value);
    }
  }

  /**
   * 编辑已存在todoText（输入框 失去焦点保存）
   */
  public handleEditBlur = (e :React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    if(!value) {
      return;
    }
    this.toggleEdit();
    this.props.editItem(this.props.id, value);
  }

  public render = () => {
    const { title, isCompleted } = this.props;

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          name="todo"
          className="toggle"
          checked={isCompleted}
          onChange={this.handleToggle}
        />
        {
          this.state.isEditing ? (
            <input
              type="text"
              autoFocus={true}
              className="edit-todo"
              defaultValue={title}
              onKeyDown={this.handleEditKeyDown}
              onBlur={this.handleEditBlur}
            />
          ) : (
            <label className="todo-title" onDoubleClick={this.toggleEdit}> { title } </label>
          )
        }
        <a href="javascript:void(0);" className="delete-todo" onClick={this.deleteItem}> x </a>
      </div>
    );
  }
}

export default TodosItem;
