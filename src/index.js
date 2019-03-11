import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ReduxStore} from "./store/ReduxStore";

const store = new ReduxStore();

ReactDOM.render(<App />, document.getElementById('root'));