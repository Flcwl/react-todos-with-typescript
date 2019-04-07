import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodosApp from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <TodosApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
