import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { reducers } from './redux/reducers'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const store = createStore(
    reducers,
    composeEnhancers(
       applyMiddleware(thunk,logger)
    )
)

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
