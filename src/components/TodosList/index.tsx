import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../../stores/actions';
import { TodoItem } from '../TodosItem';
import { ITodo, FiltersEnum } from '../../stores/types';
import { IStoreState } from '../../stores/types/index';

const mapStateToProps = (state: IStoreState): {isMarkAll: boolean, todos: ITodo[], currentFilter: FiltersEnum} => ({
  isMarkAll: state.todos.length > 0 && state.todos.every((todo: ITodo) => todo.isCompleted),
  todos: state.todos,
  currentFilter: state.currentFilter || FiltersEnum.ALL
});

const mapDispatcherToProps = (dispatch: Dispatch): { toggleAllTodos: (isMarkAll: boolean) => void } => ({
  toggleAllTodos: (isMarkAll: boolean) => dispatch(actions.toggleAllTodos(isMarkAll))
});

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

export class TodosList extends React.Component<ReduxType> {

  /**
   * 过滤显示todos列表
   * 去 `id` 更改写法，使用数组下标标识`id`
   * others: 比对内存地址（but js can't）
   */
  public getFilterTodos = (currentFilter: FiltersEnum) => {

    switch (currentFilter) {
      case FiltersEnum.ACTIVE:
        return this.filterTodos(item => !item.isCompleted);
      case FiltersEnum.COMPLETED:
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

    todos.forEach((todo: ITodo, index: number) => {
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

    return filteredTodosList;
  }

  public handleInputChange = () => {
    const { isMarkAll, toggleAllTodos } = this.props;
    toggleAllTodos(!isMarkAll);
  }

  public render() {
    const { isMarkAll, currentFilter } = this.props;
    const filteredTodosList = this.getFilterTodos(currentFilter);

    return (
      <div>
        <div className="clearfix">
          <div className="toggle-all-box">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={ isMarkAll }
              onChange={ this.handleInputChange }
            />
            <label htmlFor="toggle-all" className="toggle-all-label">
              Mark all as { isMarkAll ? 'active' : 'complete' }
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

export default connect(mapStateToProps, mapDispatcherToProps)(TodosList);
