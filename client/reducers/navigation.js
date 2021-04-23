import { NAVIGATE } from '../actions/navigation'


const navigateReducer = (state = '', action) => {

  switch (action.type) {
    case NAVIGATE:
      return action.api

    default:
      return state
  }

}

export default navigateReducer