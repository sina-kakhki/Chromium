import { HOLIDAYS } from "../actions/holiday"

function holidays(state = [], action) {
    switch (action.type) {
        case HOLIDAYS:

            return action.data

        default:
            return state
    }
}

export default holidays