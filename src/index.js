import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeyApp from './HomeyApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomeyApp />, document.getElementById('homeyApp'));

// If you want your HomeyApp to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
