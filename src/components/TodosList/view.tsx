import * as React from 'react';
import { TodosItem } from '../TodosItem';
// import * as styles from "./App.scss";
import { ITodo, TodosFilters } from '../../services/todoService';

export class TodosList extends React.Component<
  // Props is readonly ref: https://reactjs.org/docs/components-and-props.html#props-are-read-only
  // Array must tobe type: Readonly<{ prop: Type[]; }>
  Readonly<{
    isMarkAll: boolean;
    currentFilter: string;
    list: ITodo[];
    toggleTodo: (id :number) => void;
    deleteTodo: (id :number) => void;
    toggleAllItems: () => void;
    toggleTodoTitle: (id :number, title :string) => void;
  }>
> {

  // public isMarkedAll = false;
  constructor(props :any) {
    super(props);
    this.handleCheckAll = this.handleCheckAll.bind(this);
  }

  public handleCheckAll() {
    this.props.toggleAllItems();
  }

  public filterTodos() {
    const filterName = this.props.currentFilter;
    console.log(filterName);

    switch (filterName) {
      case TodosFilters.ACTIVE:
        return this.props.list.filter(item => !item.isCompleted);
      case TodosFilters.COMPLETED:
        return this.props.list.filter(item => item.isCompleted);
      default:
        return this.props.list;
    }
  }

  public render() {
    const {isMarkAll, toggleTodo, deleteTodo, toggleTodoTitle} = this.props;
    const list = this.filterTodos();
    // TODO: to define a todo interface
    const items = list.map((item: ITodo) => (
      /* TodosItem: toggleTodo、deleteTodo、MarkAllTodo  */
      <TodosItem
        key={item.id}
        id={item.id}
        title={item.title}
        isCompleted={item.isCompleted}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editItem={toggleTodoTitle}
      />
    ));

    return (
      <div>
        <div className="clearfix">
          <div className="toggle-all-box">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={isMarkAll} onChange={this.handleCheckAll} />
            <label htmlFor="toggle-all" className="toggle-all-label">Mark all as {isMarkAll ? 'active' : 'complete'}</label>
          </div>
        </div>
        <div className="todo-list">
          <ul>
            { items }
          </ul>
        </div>
      </div>
    );
  }
}

// export default TodosList;
