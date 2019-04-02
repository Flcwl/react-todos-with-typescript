import * as React from 'react';
import './App.css';
// import * as styles from "./App.scss";
import Header from './components/Header';
import TodosItem from './components/TodosItem';

class App extends React.Component {

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
        {/* header */}
        <Header appTitle="todos" />
        {/* body */}
        <section className="main">
          <div className="clearfix">
            <div className="toggle-all-box">
              <input id="toggle-all" className="toggle-all" type="checkbox" />>
              <label htmlFor="toggle-all" className="toggle-all-label">Mark all as complete</label>
            </div>
          </div>

          {/* todo 列表 */}
          <div className="todo-list">
            {/* test */}
            <ul>
              <li className="todo-item">
                <input type="checkbox" name="todo" className="toggle" data-todo-id="1" />
                <label htmlFor="toggle" className="todo-title"> test </label>
                <a href="javascript:void(0);" className="delete-todo"> x </a>
                <input type="text" className="edit-todo"/>
              </li>
            </ul>
          </div>
        </section>

        {/* footer */}
        <footer className="footer">
          <ul className="filters">
            <li>
              <a className="filter-label seleted all" href="javascript:void(0)">All</a>
            </li>
            <li>
              <a className="filter-label active" href="javascript:void(0)">Active</a>
            </li>
            <li>
              <a className="filter-label completed" href="javascript:void(0)">Completed</a>
            </li>
          </ul>
        </footer>
      </main>
    );
  }
}

export default App;
