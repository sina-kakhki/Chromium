import { combineReducers } from 'redux'

import fruits from './fruits'

import navigate from './navigation'
import holiday from './holiday'
import holidays from './holidays'
import word from './dictionary'
import url from './url'

export default combineReducers({
  fruits,
  navigate,
  word,
  url,
  holiday,
  holidays
})
