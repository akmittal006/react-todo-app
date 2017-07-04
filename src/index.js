import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './containers/ToDoApp.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<TodoApp/>, document.getElementById('root'));
registerServiceWorker();
