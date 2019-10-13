import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './CSS/index.css';

ReactDOM.render(
    <div className="ui container root-container">
        <hr className="blue-floated-line" />
        <App />
    </div>
    ,
    document.querySelector('#root')
);