import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;