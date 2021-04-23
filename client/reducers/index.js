import { combineReducers } from 'redux'

import fruits from './fruits'

import navigate from './navigation'
import word from './dictionary'

export default combineReducers({
  fruits,
  navigate,
  word
})
