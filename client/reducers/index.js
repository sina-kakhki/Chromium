import { combineReducers } from 'redux'

import fruits from './fruits'

import navigate from './navigation'
import word from './dictionary'
import url from './url'

export default combineReducers({
  fruits,
  navigate,
  word,
  url
})
