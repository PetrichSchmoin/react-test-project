import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/_index.scss';
import App from './ui/App';
import { Router } from 'react-router';
import * as serviceWorker from './serviceWorker';
import { browserHistory } from './browserhistory';

ReactDOM.render(
  <React.StrictMode>
    <Router history={browserHistory}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
