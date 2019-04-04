import * as React from 'react';
import { TodosItem } from '../TodosItem';
// import * as styles from "./App.scss";
import { todo } from '../../services/todoService';

export class TodosList extends React.Component<
  Readonly<{ list: todo[]; }>
> {

  public render() {
    // TODO: to define a todo interface
    const items = this.props.list.map((item: todo) => (
      <TodosItem key={item.id} id={item.id} title={item.title} isCompleted={item.isCompleted} />
    ));
    return (
      <div className="clearfix">
        <div className="toggle-all-box">
          <input id="toggle-all" className="toggle-all" type="checkbox" />>
          <label htmlFor="toggle-all" className="toggle-all-label">Mark all as complete</label>
        </div>
        <div className="todo-list">
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

// export default TodosList;
