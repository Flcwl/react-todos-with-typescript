import * as React from 'react';
import './App.css';
// import * as styles from "./App.scss";
import Header from './components/Header';
import { TodosList } from './components/TodosList';
import { Footer } from './components/Footer';
import { ITodo } from './services/todoService';
import { localStore } from './utils/localStorage';
import { AddTodosInput } from './components/AddTodosInput/view';

interface IState {
  // here is state type
  isMarkAll: boolean;
  currentFilter: string;
  items: ITodo[];
}

class TodosApp extends React.Component<{}, IState>  {
  public appTitle = 'Todos 🎉';
  private increaseNum: number;
  // TODO: if here define, type will be never
  // state = {
  //   isMarkAll: false,
  //   currentFilter: TodosFilters.ALL,
  //   items: []
  // };

  constructor(props :any) {
    super(props);
    const localTodos = JSON.parse( localStore.get('react-todos-list') || '[]' );
    const localFilter = localStore.get('react-todos-currentFilter') || 'all';
    const isMarkAll = this.checkAll(localTodos);

    this.increaseNum = parseInt( localStore.get('react-todos-increaseNum'), 10) || 1;
    // init state，don't need setState
    this.state = {
      isMarkAll,
      currentFilter: localFilter,
      items: localTodos
    };

    this.addTodoItem = this.addTodoItem.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleAllTodo = this.toggleAllTodo.bind(this);
  }

  public genNextId = () :number => {
    return this.increaseNum++;
  }

  public addTodoItem(title :string) {

    if(this.state.items.length > 8) {
      alert('任务太多啦，请清理！');
      return;
    }
    console.log(title);

    // way1: setState
    const items = [...this.state.items];
    items.push({
      id:  this.genNextId(),
      title,
      isCompleted: false
    });
    const isMarkAll = this.checkAll(items);
    this.setState({
      isMarkAll,
      items
    });
  }

  public toggleTodo(id :number) {
    console.log(id);

    // way2: setState
    // TODO: type to define Interface, but cumbersome
    this.setState((preState :IState) => {
      const items = preState.items.map(item => {
        return item.id === id ? {
          ...item,
          isCompleted: !item.isCompleted
        } : {
          ...item
        };
      });
      const isMarkAll = this.checkAll(items);
      console.log(isMarkAll);
      return {
        isMarkAll,
        items
      };
    });
  }

  public deleteTodo(id :number) {
    console.log(id);

    this.setState((preState :IState) => {
      const items = preState.items.filter(item =>  item.id !== id);
      const isMarkAll = this.checkAll(items);
      console.log(isMarkAll);
      return {
        isMarkAll,
        items
      };
    });
  }

  public toggleTodoTitle = (id :number, title :string) => {
    console.log(title);

    this.setState((preState :IState) => {
      const items = preState.items.map(item => (
        item.id === id ? {
          ...item,
          title
        } : {
          ...item
        }
      ));
      return {
        items
      };
    });
  }

  public checkAll = (items :ITodo[]) :boolean => {
    return items.length > 0 && items.every(item => item.isCompleted);
  }

  public toggleAllTodo() {
    // console.log(e);
    // TODO: state.isMarkAll changed to change state.items
    this.setState((preState :IState) => {
      const isMarkAll = !preState.isMarkAll;
      console.log(isMarkAll);

      const items = preState.items.map(item => ({
        ...item,
        isCompleted: isMarkAll
      }));
      console.log(items);

      return {
        isMarkAll,
        items
      };
    });
  }

  public toggleFilter(label :string) {
    console.log(label);
    this.setState({
      currentFilter: label,
    });
  }

  public render() {
    const {isMarkAll, currentFilter, items} = this.state;

    console.info(
      '%c%s',
      'color: rgb(120, 187, 120); font-size: 24px;',
      'changed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! local storage. '
    );
    localStore.set('react-todos-list', items);
    localStore.set('react-todos-currentFilter', currentFilter);
    localStore.set('react-todos-increaseNum', this.increaseNum);

    return (
      <main className="todo-app">
        {/* header： 显示title */}
        <Header appTitle={this.appTitle} />

        {/* AddTodoInput： new Todo, 传值到TodoList */}
        <AddTodosInput handleValue = {this.addTodoItem} />

        <section className="main">
          {/* TodosList： 根据currentFilter 过滤todoList结果 */}
          <TodosList
            isMarkAll={isMarkAll}
            currentFilter={currentFilter}
            list={items}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            toggleAllItems={this.toggleAllTodo}
            toggleTodoTitle={this.toggleTodoTitle}
          />
        </section>

        <footer className="footer">
          {/* FilterItem: 传入Filter选中值 高亮、切换Filter 导出选中值currentFilter */}
          <Footer handleFilter = {this.toggleFilter} />

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
