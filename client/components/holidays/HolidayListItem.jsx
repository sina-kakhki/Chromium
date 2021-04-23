import React from 'react'
import { connect } from 'react-redux'
import { setHolidayAction } from '../../actions/holiday'
import { getTodo } from '../../apis/holiday'

function HolidayListItem({ holiday, dispatch }) {

    function onHolidayClicked() {

        getTodo(holiday.uuid, dispatch).then(list => {
            if (list.body) {
                dispatch(setHolidayAction(
                    { ...holiday, todo: list.body.todo }))
            } else {
                dispatch(setHolidayAction(holiday))
            }

        })


    }

    return (
        <div onClick={onHolidayClicked}>
            <div>
                <h4>{holiday.name}</h4>
                <p><strong>Date:</strong> {holiday.date}</p>
            </div>
        </div>
    )

}

export default connect()(HolidayListItem)