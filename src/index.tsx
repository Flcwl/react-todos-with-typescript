import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodosApp from './App';
import './index.css';
import { localStore } from './utils/localStorage';
import rootReducer from './stores/reducers';
import registerServiceWorker from './registerServiceWorker';

const persistedState = JSON.parse( localStore.get('redux-todos-state') || '{}' );
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStore.set('redux-todos-state', store.getState());
});

ReactDOM.render(
  <Provider store={ store }>
    <TodosApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
