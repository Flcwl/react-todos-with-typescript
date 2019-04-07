import * as React from 'react';
import './App.css';
// import * as styles from "./App.scss";
import Header from './components/Header';
import { TodosList } from './components/TodosList';
import { Footer } from './components/Footer/index';
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
  public appTitle = "Todos";
  public increaseNum: number;
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

    if(this.state.items.length > 11) {
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

    // way1: setState
    // TODO: type to define Interface, but cumbersome
    this.setState((state: {
      isMarkAll: boolean,
      currentFilter :string,
      items :ITodo[]
    }) => {
      const items = state.items.map(item => {
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


    this.setState((state: {
      isMarkAll: boolean,
      currentFilter :string,
      items :ITodo[]
    }) => {
      const items = state.items.filter(item =>  item.id !== id);
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

    this.setState(preState => {
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

  public checkAll = (items: ITodo[]) :boolean => {
    return items.every(item => item.isCompleted);
  }

  public toggleAllTodo(e: boolean) {
    console.log(e);
    // TODO: state.isMarkAll changed to change state.items
    this.setState((state: {
      isMarkAll: boolean,
      currentFilter :string,
      items :ITodo[]
    }) => {
      const isMarkAll = !state.isMarkAll;
      console.log(isMarkAll);

      const items = state.items.map(item => ({
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
    console.log("changed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    localStore.set('react-todos-list', this.state.items);
    localStore.set('react-todos-currentFilter', this.state.currentFilter);
    localStore.set('react-todos-increaseNum', this.increaseNum);
    return (
      <main className="todo-app">
        {/* header： 显示title */}
        <Header appTitle={ this.appTitle } />
        {/* AddTodoInput： new Todo, 传值到TodoList */}
        <AddTodosInput handleValue = {this.addTodoItem} />
        <section className="main">
          {/* TodosList： 根据currentFilter 过滤todoList结果 */}
          <TodosList
            isMarkAll={this.state.isMarkAll}
            currentFilter={this.state.currentFilter}
            list={this.state.items}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
            toggleAllItems={this.toggleAllTodo}
            toggleTodoTitle={this.toggleTodoTitle}
          />
        </section>
        <footer className="footer">
          {/* FilterItem: 传入Filter选中值 高亮、切换Filter 导出选中值currentFilter */}
          <Footer handleFilter = {this.toggleFilter} />
        </footer>
      </main>
    );
  }
}

export default TodosApp;
