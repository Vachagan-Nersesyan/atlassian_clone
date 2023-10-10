import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import store, { AppStateType } from './redux/redux-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function rerenderEntireTree(state: AppStateType) {

  root.render(
    <App />
  );
}

rerenderEntireTree(store.getState())



store.subscribe(() => {
  let state = store.getState()

  rerenderEntireTree(state)
})
