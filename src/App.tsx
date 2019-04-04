import * as React from 'react';
import './App.css';
// import * as styles from "./App.scss";
import Header from './components/Header';
import { TodosItem } from './components/TodosItem';
import TodosForm from './components/TodosForm';
import { TodosList } from './components/TodosList';
import { FilterItem } from './components/Footer/index';

class App extends React.Component {
  public appTitle = "Todos";

  public state = {
    item: {
      height: 60
    },
    items: [
      { id: 1, title: 'Have a star for me', isCompleted: false },
      { id: 2, title: 'Typescript + Sass + React', isCompleted: false },
      { id: 3, title: 'Work better', isCompleted: false }
    ]
  };

  constructor(props: any) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }
  public addItem(title :string) {

    console.log(title);

    const updatedItems = [...this.state.items];
    updatedItems.push({
      id: this.state.items.length + 1,
      title,
      isCompleted: false
    });
    this.setState({ items: updatedItems });
  }

  public render() {
    const items = this.state.items.map(item => (
      <TodosItem
        id={item.id}
        title={item.title}
        isCompleted={item.isCompleted}
        // toggleItem={() => this.toggleItem(item.id)}
        // deleteItem={() => this.deleteItem(item.id)}
      />
    ));
    console.log(items);

    return (
      <main className="todo-app">
        {/* header： 显示title */}
        <Header appTitle={ this.appTitle } />
        {/* AddTodoInput： new Todo, 传值到TodoList */}
        <TodosForm handleValue = {this.addItem}/>
        <section className="main">
          {/* TodosList */}
          <TodosList list={this.state.items}/>
        </section>
        {/* footer */}
        <footer className="footer">
          {/* FilterItem: 选中高亮、切换导出选中值 */}
          <FilterItem appTitle="abc"/>
        </footer>
      </main>
    );
  }
}

export default App;
