import { SET_URL } from '../actions/url'


const urlReducer = (state = '', action) => {
  switch (action.type) {
    case SET_URL:
      return state.url
    default:
      return state
  }
}

export default urlReducer