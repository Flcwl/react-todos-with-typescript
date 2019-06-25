import * as React from 'react';
import './App.css';
import { ITodo } from './services/todoService';
import { localStore } from './utils/localStorage';
// Components
import { Header } from './components/Header';
import { AddTodosInput } from './components/AddTodosInput';
import { TodosList } from './components/TodosList';
import { FilterLinkList } from './components/FilterLinkList';

interface IState {
  isMarkAll: boolean;
  currentFilter: string;
  todos: ITodo[];
}

class TodosApp extends React.Component<{}, IState>  {
  public appTitle = 'Todos 🎉';

  constructor(props :any) {
    super(props);
    const localTodos = JSON.parse( localStore.get('react-todos-list') || '[]' );
    const localFilter = localStore.get('react-todos-currentFilter') || 'all';
    const isMarkAll = this.checkAllCompleted(localTodos);

    // initial State
    this.state = {
      isMarkAll,
      currentFilter: localFilter,
      todos: localTodos
    };
  }

  public addTodoItem = (title :string) => {

    if(this.state.todos.length > 8) {
      alert('任务太多啦，请清理！');
      return;
    }

    const todos = [...this.state.todos, {
      title,
      isCompleted: false
    }];
    const isMarkAll = this.checkAllCompleted(todos);

    // way1: setState
    this.setState({
      isMarkAll,
      todos
    });
  }

  public toggleTodo = (idx :number) => {

    // way2: setState
    // TODO: type to define Interface, but cumbersome
    this.setState((preState :IState) => {
      const todos = preState.todos.map((item, index) => {
        return index === idx ? {
          ...item,
          isCompleted: !item.isCompleted
        } : {
          ...item
        };
      });
      const isMarkAll = this.checkAllCompleted(todos);

      return {
        isMarkAll,
        todos
      };
    });
  }

  public deleteTodo = (idx :number) => {

    this.setState((preState :IState) => {
      const todos = preState.todos.filter((item, index) =>  index !== idx);
      const isMarkAll = this.checkAllCompleted(todos);

      return {
        isMarkAll,
        todos
      };
    });
  }

  public toggleTodoTitle = (idx :number, title :string) => {

    this.setState((preState :IState) => {
      const todos = preState.todos.map((item, index) => (
        index === idx ? {
          ...item,
          title
        } : {
          ...item
        }
      ));
      return {todos};
    });
  }

  /**
   *  反选：检查所有todos是否全选完成
   * @memberof TodosApp
   */
  public checkAllCompleted = (todos :ITodo[]) :boolean => {
    return todos.length > 0 && todos.every(item => item.isCompleted);
  }

  /**
   * 切换：全选 or 全不选
   * @memberof TodosApp
   */
  public toggleAllTodo = () => {
    this.setState((preState :IState) => {
      const isMarkAll = !preState.isMarkAll;
      const todos = preState.todos.map(item => ({
        ...item,
        isCompleted: isMarkAll
      }));

      return {
        isMarkAll,
        todos
      };
    });
  }

  /**
   * 切换过滤条件
   * @memberof TodosApp
   */
  public toggleFilter = (label :string) => {
    this.setState({
      currentFilter: label,
    });
  }

  public render() {
    const {isMarkAll, currentFilter, todos} = this.state;

    console.info(
      '%c%s',
      'color: rgb(120, 187, 120); font-size: 24px;',
      'Local storage had been changed!'
    );
    localStore.set('react-todos-list', todos);
    localStore.set('react-todos-currentFilter', currentFilter);

    return (
      <main className="todo-app">
        {/* header： 显示title */}
        <Header title={this.appTitle} />

        {/* AddTodoInput： new Todo, 传值到TodoList */}
        <AddTodosInput handleValue = {this.addTodoItem} />

        <section className="main">
          {/* TodosList： 根据currentFilter 过滤todoList结果 */}
          <TodosList
            isMarkAll={isMarkAll}
            currentFilter={currentFilter}
            list={todos}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            toggleAllItems={this.toggleAllTodo}
            toggleTodoTitle={this.toggleTodoTitle}
          />
        </section>

        <footer className="footer">
          {/* FilterItem: 传入Filter选中值 高亮、切换Filter 导出选中值currentFilter */}
          <FilterLinkList currentFilter={currentFilter} handleFilter = {this.toggleFilter} />
          {/* Tips */}
          <div className="hints">
            <div className="hint-title">
              <h1>Hints</h1>
            </div>
            <div className="hint">
              <p>→ Hit enter to add new todo.</p>
              <p>→ Double click undone todo text to edit.</p>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}

export default TodosApp;
