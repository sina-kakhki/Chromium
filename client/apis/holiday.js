import request from 'superagent'
import { holidayAction } from '../actions/holiday'

const END_POINT = "api/v1/holidays"
export function getHolidays(dispatch) {

    return request.get(END_POINT).then(res => {
        dispatch(holidayAction(res.body))
    })


}

export function storeTodo(data, dispatch) {

    return request.post(END_POINT).send(data).then(res => {

        //dispatch(holidayAction(res.body))
    })


}

export function getTodo(id, dispatch) {
    return request.post(END_POINT + '/todo').send({
        id: id
    })
}