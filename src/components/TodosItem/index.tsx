import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: any, ownProps: any): { id: number, isCompleted: boolean, title: string } => ({
  id: ownProps.id,
  isCompleted: ownProps.isCompleted,
  title: ownProps.title
});

// 将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch, ownProps: any) => ({
    deleteTodo: (id: number) => dispatch(actions.deleteTodo(id)),
    toggleTodo: () => dispatch(actions.toggleTodo(ownProps.id)),
    editTodo: (text: string) => dispatch(actions.editTodo(ownProps.id, text))


    // editItem: (idx :number, title :string) => void;
});

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

export class TodosItem extends React.Component<ReduxType> {

  public state = {
    isEditing: false
  };

  public deleteItem = () => {
    console.log(this.props);

    this.props.deleteTodo(this.props.id);
  }

  public handleToggle = () => {
    this.props.toggleTodo();
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
    const value: string = (e.target as any).value.trim();

    if(value && e.key === 'Enter') {
      this.toggleEdit();
      this.props.editTodo(value);
    }
  }

  /**
   * 编辑已存在todoText（输入框 失去焦点保存）
   */
  public handleEditBlur = (e :React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value.trim();

    if(!value) {
      return;
    }
    this.toggleEdit();
    this.props.editTodo(value);
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
            <label className="todo-title"
              style={{textDecoration: isCompleted ? 'line-through' : 'none'}}
              onDoubleClick={this.toggleEdit}> { title } </label>
          )
        }
        <a href="javascript:void(0);" className="delete-todo" onClick={this.deleteItem}> x </a>
      </div>
    );
  }
}

export const TodoItem = connect(mapStateToProps, mapDispatcherToProps)(TodosItem);
