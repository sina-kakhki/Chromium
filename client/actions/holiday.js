export const HOLIDAYS = 'HOLIDAYS'
export const SET_HOLIDAYS = 'SET_HOLIDAYS'


export function holidayAction(data) {
    return {
        type: HOLIDAYS,
        data: data
    }
}

export function setHolidayAction(data) {
    return {
        type: SET_HOLIDAYS,
        data: data
    }
}