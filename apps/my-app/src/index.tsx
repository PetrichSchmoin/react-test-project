import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/_index.scss';
import App from './ui/App';
import { Router } from 'react-router';
import { browserHistory } from './browserhistory';

ReactDOM.render(
  <React.StrictMode>
    <Router history={browserHistory}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
