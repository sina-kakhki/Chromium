import { SET_WORD } from '../actions/dictionary'

const wordReducer = (state = '', action) => {
  switch (action.type) {
    case SET_WORD:
      return action.word
    default:
      return state
  }
}

export default wordReducer