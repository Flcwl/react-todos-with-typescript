import * as React from 'react';
// import * as styles from "./App.scss";

class TodosItem extends React.Component<{
  id: number;
  title: string;
  isCompleted: boolean;
}> {

  public deleteItem(event: any) {
    console.log(event);

    const $deleteBtn = event.target;
    console.dir($deleteBtn.dataset.todoId);
    const deletedId = $deleteBtn.dataset.todoId;
    console.log(deletedId);

    // this.todos = this.todos.filter(item => item.id !== window.parseInt(deletedId));
  }

  public render() {
    const {id, title, isCompleted} = this.props;
    return (
      <div className="todo-item">
        <input type="checkbox" name="todo" id={ 'toggle' + id } className={ 'toggle' + id } defaultChecked={ isCompleted }  />
        <label htmlFor={ 'toggle' + id } className="todo-title"> { title } </label>
        <a href="javascript:void(0);" data-todo-id={ id } className="delete-todo" onClick={ this.deleteItem }> x </a>
        <input type="text" className="edit-todo"/>
      </div>
    );
  }
}

export default TodosItem;
