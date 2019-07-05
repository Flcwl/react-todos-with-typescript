import * as React from 'react';
// import { TodosItem } from '../TodosItem';
import { ITodo, TodosFilters } from '../../services/todoService';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';
// import todos from '../../stores/reducers/todos';
// import { toggleAllTodos } from '../../stores/actions/index';
import { TodoItem } from '../TodosItem/index';

const mapStateToProps = (state: any) => ({
  isMarkAll: state.todos.length > 0 && state.todos.every((item: ITodo) => item.isCompleted),
  todos: state.todos,
  currentFilter: state.currentFilter || TodosFilters.ALL
});

const mapDispatcherToProps = (dispatch: Dispatch) => ({
  toggleAllTodos: (isMarkAll: boolean) => dispatch(actions.toggleAllTodos(isMarkAll)),
  toggleTodo: (id: number) => dispatch(actions.toggleTodo(id))
});

export type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;


export class TodosList extends React.Component<ReduxType> {

  /**
   * 过滤显示todos列表
   * 去 `id` 更改写法，使用数组下标标识`id`
   * others: 比对内存地址（but js can't）
   */
  public getFilterTodos = () => {
    const filterName = this.props.currentFilter;
    console.log(filterName);

    switch (filterName) {
      case TodosFilters.ACTIVE:
        return this.filterTodos(item => !item.isCompleted);
      case TodosFilters.COMPLETED:
        return this.filterTodos(item => item.isCompleted);
      default:
        return this.filterTodos();
    }
  }


  /**
   * 根据过滤规则返回要显示的jsx表达式数组
   * @param {Function} cb 自定义filter函数规则
   * @returns {jsx}  过滤后的jsx表达式数组
   * @memberof TodosList
   */
  public filterTodos = (cb?: (item: ITodo) => boolean) => {
    const filteredTodosList: any[] = [];
    const { todos } = this.props;
    todos.forEach((todo: any, index: number) => {
      // 也可以使用函数默认参数语法`cb: (item: ITodo) => boolean = item => true`
      const ret = cb ? cb(todo) : true;
      if(ret) {
        filteredTodosList.push(
          <TodoItem
          key={ index }
          { ...todo}
          id={index}
        />
        );
      }
    });
    console.log(filteredTodosList);

    return filteredTodosList;
  }

  public render() {
    const {isMarkAll, todos} = this.props;
    const filteredTodosList = this.getFilterTodos();
    console.log(isMarkAll, todos);
    // const isMarkAll = todos.every((item: ITodo) => item.isCompleted);

    return (
      <div>
        <div className="clearfix">
          <div className="toggle-all-box">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={isMarkAll}
              // tslint:disable-next-line: jsx-no-lambda
              onChange={() => this.props.toggleAllTodos(!isMarkAll)}
            />
            <label htmlFor="toggle-all" className="toggle-all-label">
              Mark all as {isMarkAll ? 'active' : 'complete'}
            </label>
          </div>
        </div>
        <div className="todo-list">
          <ul>
            { filteredTodosList }
          </ul>
        </div>
      </div>
    );
  }
}

export const VisibleTodosList = connect(mapStateToProps, mapDispatcherToProps)(TodosList);
