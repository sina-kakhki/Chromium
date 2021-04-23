import { SET_HOLIDAYS } from "../actions/holiday"

function holiday(state = {}, action) {
    switch (action.type) {
        case SET_HOLIDAYS:
            return action.data

        default:
            return state
    }
}

export default holiday