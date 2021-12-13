import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducer/reducer'

const store = createStore(reducer.quotes, composeWithDevTools())
window.store = store

export default store