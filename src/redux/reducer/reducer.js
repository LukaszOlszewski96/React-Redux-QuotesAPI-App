import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import types from '../type/types'

const init = {
  quotes: [{"quote": "TEXT ", "author": "TEXT"},
  {"quote": "text", "author": "Text"}]
  
}

function quotes(state = init, action) {
  switch(action.type) {
    case types.NEXT:
      return{
        ...state, quotes: [...state.quotes, action.quote]
      }
    case types.PREV:
      return{
        ...state, quotes: []
      }
    default: 
      return state
  }
}



const store = createStore(quotes, composeWithDevTools())
window.store = store

export default {quotes}