import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './Reducer';
import rootReducer from './Reducer';


const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
