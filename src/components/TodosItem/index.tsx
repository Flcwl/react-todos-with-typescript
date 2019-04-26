import * as React from 'react';
// import * as styles from "./App.scss";

export class TodosItem extends React.Component<{
  id: number;
  title: string;
  isCompleted: boolean;

  toggleTodo: (id :number) => void;
  deleteTodo: (id :number) => void;
  editItem: (id :number, title :string) => void;
}> {

  public state = {
    isCompleted: false,
    isEditing: false
  };

  constructor(props: any) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEditBlur = this.handleEditBlur.bind(this);
    this.handleEditKeyDown = this.handleEditKeyDown.bind(this);
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

  public toggleEdit() {
    if (this.props.isCompleted) {
      return;
    }
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  public handleEditKeyDown(e :React.KeyboardEvent<HTMLInputElement>) {
    const value = (e.target as any).value.trim();

    if(value && e.key === 'Enter') {
      this.toggleEdit();
      this.props.editItem(this.props.id, value);
    }
  }

  public handleEditBlur(e :React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();

    if(!value) {
      return;
    }
    this.toggleEdit();
    this.props.editItem(this.props.id, value);
  }

  public render() {
    const { id, title, isCompleted } = this.props;
    console.log(this.state.isCompleted);

    const itemName = this.state.isEditing ? (
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
    );

    return (
      <div className="todo-item">
        {/* checkbox in React ref: https://codepen.io/dsabalete/pen/jAzLpA?editors=0010 */}
        <input
          type="checkbox"
          name="todo"
          id={"toggle" + id}
          className="toggle"
          checked={isCompleted}
          onChange={this.handleCheck}
        />

        {/* <label htmlFor={ 'toggle' + id } className="todo-title"> { title } </label> */}
        { itemName }

        {/* TODO: jquery-todo 实现操作整个todosItem是通过todo-id； how React work？ */}
        {/* just by `key` */}
        <a href="javascript:void(0);" data-todo-id={id} className="delete-todo" onClick={this.deleteItem}> x </a>
        {/* TODO: edit todo label */}
      </div>
    );
  }
}

export default TodosItem;
