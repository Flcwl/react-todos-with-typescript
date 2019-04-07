import * as React from 'react';
// import * as styles from "./App.scss";

export class TodosItem extends React.Component<{
  id: number;
  title: string;
  isCompleted: boolean;

  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}> {

  public state = {
    isCompleted: false
  };

  constructor(props: any) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state.isCompleted = this.props.isCompleted;
  }

  public deleteItem() {
    this.props.deleteTodo(this.props.id);
  }

  public handleCheck() {
    this.setState((state: {isCompleted: boolean}) => {
      console.log(111);
      return {
        isCompleted: !state.isCompleted
      };
    });
    this.props.toggleTodo(this.props.id);
  }

  public render() {
    const { id, title } = this.props;
    console.log(this.state.isCompleted);

    return (
      <div className="todo-item">
        {/* checkbox in React ref: https://codepen.io/dsabalete/pen/jAzLpA?editors=0010 */}
        <input type="checkbox" name="todo" id={ 'toggle' + id } className='toggle' checked={ this.props.isCompleted } onChange={this.handleCheck} />
        <label htmlFor={ 'toggle' + id } className="todo-title"> { title } </label>
        {/* TODO: jquery-todo 实现操作整个todosItem是通过todo-id； how React work？ */}
        {/* just by `key` */}
        <a href="javascript:void(0);" data-todo-id={ id } className="delete-todo" onClick={ this.deleteItem }> x </a>
        {/* TODO: edit todo label */}
        <input type="text" className="edit-todo"/>
      </div>
    );
  }
}

// export default TodosItem;
