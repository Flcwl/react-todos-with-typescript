import * as React from 'react';
import { TodosItem } from '../TodosItem';
import { ITodo, TodosFilters } from '../../services/todoService';

export class TodosList extends React.Component<
  Readonly<{
    isMarkAll: boolean;
    currentFilter: string;
    list: ITodo[];
    toggleTodo: (idx :number) => void;
    deleteTodo: (idx :number) => void;
    toggleAllItems: () => void;
    toggleTodoTitle: (idx :number, title :string) => void;
  }>
> {

  /**
   * 过滤显示todos列表
   * 去 `id` 更改写法，使用数组下标标识`id`
   * others: 比对内存地址（but js can't）
   */
  public getFilterTodos = () => {
    const filterName = this.props.currentFilter;

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
    const {list, toggleTodo, deleteTodo, toggleTodoTitle} = this.props;
    list.forEach((item, index) => {
      // 也可以使用函数默认参数语法`cb: (item: ITodo) => boolean = item => true`
      const ret = cb ? cb(item) : true;
      if(ret) {
        filteredTodosList.push(
          <TodosItem
            key={index}
            id={index}
            title={item.title}
            isCompleted={item.isCompleted}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editItem={toggleTodoTitle}
          />
        );
      }
    });
    console.log(filteredTodosList);

    return filteredTodosList;
  }

  public render() {
    const {isMarkAll} = this.props;
    const filteredTodosList = this.getFilterTodos();

    return (
      <div>
        <div className="clearfix">
          <div className="toggle-all-box">
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={isMarkAll}
              onChange={this.props.toggleAllItems}
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

export default TodosList;
