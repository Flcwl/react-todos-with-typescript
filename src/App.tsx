import * as React from 'react';
import './App.css';
// Components
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodosInput';
import { VisibleTodosList } from './components/TodosList/index';
import { FilterLinks } from './components/FilterLinkList/index';

class TodosApp extends React.Component {
  public appTitle = 'Todos 🎉';


  public render() {

    console.info(
      '%c%s',
      'color: rgb(120, 187, 120); font-size: 24px;',
      'Local storage had been changed!'
    );

    return (
      <main className="todo-app">
        <Header title={this.appTitle} />

        <AddTodo />
        <section className="main">
          <VisibleTodosList />
        </section>

        <footer className="footer">
          <FilterLinks />
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
