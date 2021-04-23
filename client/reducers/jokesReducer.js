import { SET_JOKE } from '../actions/jokes'

const jokesReducer = (state = '', action) => {
    switch (action.type) {
        case SET_JOKE:
            return action.joke
        default:
            return state
    }
}

export default jokesReducer