import {createStore} from 'redux'
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const composedEnchancer = composeWithDevTools()

const store =createStore(rootReducer,composedEnchancer)

export default store;